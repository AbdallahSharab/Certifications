const translateBtn = document.getElementById("translate")

translateBtn.addEventListener("click", async function() {
    const prompt = document.getElementById("mainText").value
    const language = document.querySelector('input[name="language"]:checked').value
    
    if (!prompt) {
        document.getElementById("translatedText").value = "⚠️ Please enter text to translate."
        return
    }
    
    if (!language) {
        document.getElementById("translatedText").value = "⚠️ Please select a language."
        return
    }

    const messages = [
        {
            role: "system",
            content: `You are a helpful language translator, all you do is take the prompt given and 
                        translate it to the language selected by the user.
                        STRICT OUTPUT RULE: 
                            - Output the translation ONLY—no explanations, no quotes.    
                    `
        },
        {
            role: "user",
            content: `Translate this to ${language}: \n${prompt}`
        }
    ]

    try {
        const response = await fetch("https://pollyglot-backend.awsharab.workers.dev", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                messages: messages,
                temperature: 0
            })
        })

        const data = await response.json()
        document.getElementById("translatedText").value = data.choices?.[0]?.message?.content || "⚠️ No response."
    } catch (err) {
        console.errpr("Translation error: ", err)
        document.getElementById("translatedText").value = "❌ Something went wrong."
    }
})



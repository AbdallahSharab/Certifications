# Chef Claude App

**Chef Claude** is an AI-powered recipe generator that uses the **Anthropic AI API** to create custom recipes based on ingredients you have at home.  
This was a **guided project in Scrimba’s React course**, broken into challenges where I had to complete each step to move forward. It made the build hands-on while still providing guidance along the way.

The app ensures you get creative, personalized recipes with a clean and easy-to-read layout, thanks to **React Markdown** for formatting the AI’s responses.

## Live Demo
https://chefclaudeapp-abdallahsharab.netlify.app/ 

## The way it works
1. Enter **at least 4 ingredients** into the input form.  
2. Once enough ingredients are added, a **"Get Recipe"** button appears.  
3. The app sends your ingredients to the **Anthropic API**, which generates a recipe tailored to them.  
4. The response is rendered with **React Markdown** for better readability (headers, lists, bold text, etc.). 

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript, React  
- **Backend:** Cloudflare Workers (serverless backend to call OpenAI API securely)  
- **API:** Anthropic AI API
- **Deployment:** Netlify (frontend) + Cloudflare Workers (backend)  
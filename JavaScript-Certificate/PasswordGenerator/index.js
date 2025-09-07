const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateEl = document.getElementById("generate");
let password1El = document.getElementById("password1");
let password2El = document.getElementById("password2");

function generatePasswords() {
    let passwordLengthEl = document.getElementById("length").value;
    let password1 = "";
    let password2 = "";
    if (passwordLengthEl) {
        for (let i = 0; i < passwordLengthEl ; i++) {
            let randomChar1 = Math.floor(Math.random() * characters.length);
            let randomChar2 = Math.floor(Math.random() * characters.length);
            password1 += characters[randomChar1];
            password2 += characters[randomChar2];
        }
        document.getElementById("password-container").classList.remove("hidden");
        password1El.textContent = password1;
        password2El.textContent = password2;
    } else {
        alert("Please enter a password length")
    }
}

generateEl.addEventListener("click", generatePasswords)

function copyToClipboard(elementId) {
    let password = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(password)
        .then(() => {
            alert("Copied!")
            console.log("Copied to clipboard: " + password);
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        })
}


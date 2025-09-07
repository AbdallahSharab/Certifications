/*
1 meter = 3.280839895 feet
1 liter = 0.2641720524 gallon
1 kilogram = 2.2046226218 pound
*/ 

const convertEl = document.getElementById("convertBtn");

convertEl.addEventListener("click", function() {
    let inputValue = Number(document.getElementById("input-el").value);
    
    if (isNaN(inputValue) || (!inputValue)) {
        alert("Please enter a number greater than 0!");
        return;
    } else {
        let lengthStr = document.getElementById("lengthP");
        lengthStr.textContent = `${inputValue} meters = ${(inputValue * 3.280839895).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / 3.280839895).toFixed(3)} meters`;
        
        let volumeStr = document.getElementById("volumeP");
        volumeStr.textContent = `${inputValue} liters = ${(inputValue * 0.2641720524).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / 0.2641720524).toFixed(3)} liters`;
        
        let massStr = document.getElementById("massP");
        massStr.textContent = `${inputValue} kilos = ${(inputValue * 2.2046226218).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / 2.2046226218).toFixed(3)} kilos`;
    }
})
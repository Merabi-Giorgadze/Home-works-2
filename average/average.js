// Get the input, button, and result elements
let numbersInput = document.getElementById("numbersInput");
let calculateAverageBtn = document.getElementById("calculateAverageBtn");
let result = document.getElementById("result");

// Add event listener to the button
calculateAverageBtn.addEventListener('click', calculateAverage);

function calculateAverage() {
    // Get the input value and split it into an array by ":"
    const numbers = numbersInput.value.split(":");

     // Convert the string array to a number array
     const numberArray = numbers.map(num => num.trim()).filter(num => num !== "").map(Number);

     // Check if all elements are valid numbers
     if (numberArray.length === 0 || numberArray.some(isNaN)) {
         result.textContent = "NO VALID NUMBERS ENTERED!";
         return;
     }

    // Calculate the average
    const sum = numberArray.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numberArray.length;

    // Display the average on the screen
    result.textContent = `Average: ${average.toFixed(3)}`;
}

//"Average: " + average;
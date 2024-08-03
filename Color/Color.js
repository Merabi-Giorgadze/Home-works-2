// Get the input and button elements
let colorInput = document.getElementById("colorInput");
let changeColorBtn = document.getElementById("changeColorBtn");

// Define the valid colors
const validColors = ["red", "blue", "green", "black", "white"];

// Add event listener to the button
changeColorBtn.onclick = function() {
    const userColor = colorInput.value.toLowerCase();

    // Check if the entered color is valid
    if (validColors.includes(userColor)) {
        document.body.style.backgroundColor = userColor;
    } else {
        alert("Invalid color! Please enter one of the following colors: red, blue, green, black, white.");
    }
}

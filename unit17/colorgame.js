// Will go back later to randomly pick 3 numbers 0-255 to get random rgb colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
]


// Selects class square. Needs "." because of type of selector
var squares = document.querySelectorAll(".square");
var pickedColor = colors[5];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");


// Displays color in h1 that was picked (only colors[5] for now)
colorDisplay.textContent = pickedColor;



// Targets .squares and changes background to equal colors. Loops through array of colors
for(var i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of picked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again"
        } 
    });
}


//Loop through all the squares to change their color to the correct color
function changeColors(color) {
    //change each color to match the correct/winning color
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    };
}



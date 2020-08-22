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
var pickedColor = pickColor();
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


function pickColor() {
    //math.random generates a number between 0-1. To adjust, we multiply it times 6 (6 random colors available), add 1 (otherwise the highest we could get is 5.999), & lose everything after the decimal. Use math.floor to do that
    //use colors.length because we want the number to dynamically change (easy mode will display 3 colors instead of 6). Using .length eliminates the need to worry about +1, since length is always 1 greater than the index 
   var random = Math.floor(Math.random() * colors.length);

   //picks a random number, then returns it from index of var colors
   return colors[random];
}



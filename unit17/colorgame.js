// Will go back later to randomly pick 3 numbers 0-255 to get random rgb colors
var colors = [
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 255)"
]

var squares = document.querySelectorAll(".square");

// Targets .squares and changes background to equal colors. Loops through array of colors
for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
}
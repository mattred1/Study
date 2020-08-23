var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
})
hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
})


resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(6);

    // pick new random color from Array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    //change color of squares on page to match randomly generated colors
    for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})




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
        // compare color to pickedColor - guesses correctly or incorrectly
        if(clickedColor === pickedColor) {
            //display correct if right color is guessed
            messageDisplay.textContent = "Correct!"
            //changes square colors to equal correct color
            changeColors(clickedColor);
            //changes square colors to equal correct color
            h1.style.backgroundColor = clickedColor;
            //Change button text 
            resetButton.textContent = "Play again?"
        } else {
            //make clicked wrong square fade away
            this.style.backgroundColor = "#232323";
            //display message
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




//Randomly picks winning color
function pickColor() {
    //math.random generates a number between 0-1. To adjust, we multiply it times 6 (6 random colors available), add 1 (otherwise the highest we could get is 5.999), & lose everything after the decimal. Use math.floor to do that
    //use colors.length because we want the number to dynamically change (easy mode will display 3 colors instead of 6). Using .length eliminates the need to worry about +1, since length is always 1 greater than the index 
   var random = Math.floor(Math.random() * colors.length);

   //picks a random number, then returns it from index of var colors
   return colors[random];
}




function generateRandomColors(num) {
    // make an array
    var arr = [];

    // repeat num times
    for(var i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    };
    // return that array   
    return arr;
}




function randomColor() {
    // pick red from 0-255
    var r = Math.floor(Math.random() * 256);
    // pick green from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick blue from 0-255
    var b = Math.floor(Math.random() * 256);
    //add all of them together to return a string "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")"       
}
//keeps track of number of squares. Stops bug where winning color would be hidden in easy mode
var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");



// Start refactored code
init();

function init() {
    setUpModeButtons();

    setUpSquares();

    reset()
}




function setUpModeButtons() {
    // mode button event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            // removes selected class from both buttons, then adds it to whichever is clicked
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else {
                numSquares = 6;
            }
            reset();
        });
    }
}


function setUpSquares() {
    // Targets .squares and changes background to equal colors. Loops through array of colors
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of picked square
            var clickedColor = this.style.backgroundColor;
            // compare color to pickedColor - guesses correctly or incorrectly
            if (clickedColor === pickedColor) {
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
}


function reset() {
    // generate random colors depending on numSquares variable
    colors = generateRandomColors(numSquares);

    // pick new random color from Array
    pickedColor = pickColor();

    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";


    //change color of squares on page to match randomly generated colors
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
    squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";

}




resetButton.addEventListener("click", function() {
    reset();    
});




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
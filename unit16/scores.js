const p1Button = document.getElementById("p1");
const p2Button = document.querySelector("#p2");
const resetButton = document.getElementById("reset");
const p1Display = document.getElementById("p1Display"); // need a way to display scores and update as buttons are clicked
const p2Display = document.getElementById("p2Display");
const numInput = document.querySelector("#numbers");
let p1Score = 0; // scores start at 0 obviously
let p2Score = 0;
let gameOver = false;
let winningScore = 5;


// selects player one button and incrementally updates score as button is clicked, then displays it
p1Button.addEventListener("click", function() {
    if (!gameOver){
        p1Score++; // update score
        if(p1Score === winningScore) { // once p1Score ==== 5, gameOver becomes set to true, and this whole function is an if statement for if it's NOT game over
            p1Display.classList.add("winner");
            gameOver = true;
            p2Display.classList.add("loser")
        }
        p1Display.textContent = p1Score; // then display the value of the score
    }

});


// handles player 2 button functions
p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
            p1Display.classList.add("loser")
        }
        p2Display.textContent = p2Score;
    }

});


//Create new function for refactor
function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.classList.remove("loser");
    p2Display.classList.remove("loser");
    gameOver = false;
}


// handles reset button
resetButton.addEventListener("click", function() {
    reset();
});


//"Playing to" score. using "change" instead of "click" because click wouldn't run if you input a number using the keyboard - only if you pressed up/down arrow. Change will follow ANY change.
//set winning score display to equal the value of the input. changes dynamically
numInput.addEventListener("change", function() {
    winningScore = Number(numInput.value);  // have to add "Number()" because otherwise, numInput.value becomes a string (from changing input). We could change p1Score/p2Score == winningScore instead of === winningScore, but this is safer
    reset(); // Each time a score is changed, run the reset function, which is the equivalent to clicking the reset button
});
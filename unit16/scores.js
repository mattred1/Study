var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1Score = 0; // scores start at 0 obviously
var p2Score = 0;
var p1Display = document.getElementById("p1Display"); // need a way to display scores and update as buttons are clicked
var p2Display = document.getElementById("p2Display");
var gameOver = false;
var winningScore = 5;


// selects player one button and incrementally updates score as button is clicked, then displays it
p1Button.addEventListener("click", function() {
    if (!gameOver){
        p1Score++; // update score
        if(p1Score === winningScore) { // once p1Score ==== 5, gameOver becomes set to true, and this whole function is an if statement for if it's NOT game over
            p1Display.classList. add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score; // then display the value of the score
    }

});


p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if (p2Score === winningScore){
            p2Display.classList. add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }

});


resetButton.addEventListener("click", function() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;

});
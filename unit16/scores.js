var p1Button = document.getElementById("p1");
var p2Button = document.querySelector("#p2");
var p1Score = 0; // scores start at 0 obviously
var p2Score = 0;
var p1Display = document.getElementById("p1Display"); // need a way to display scores and update as buttons are clicked
var p2Display = document.getElementById("p2Display");

// selects player one button and incrementally updates score as button is clicked, then displays it
p1Button.addEventListener("click", function() {
    p1Score++; // update score
    p1Display.textContent = p1Score; // then display the value of the score
});


p2Button.addEventListener("click", function() {
    p2Score++;
    p2Display.textContent = p2Score;
});
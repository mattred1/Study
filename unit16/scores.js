const p1 = {
    score: 0,
    button: document.querySelector("#p1"),
    display: document.querySelector("#p1Display"),
};

const p2 = {
    score: 0,
    button: document.querySelector("#p2"),
    display: document.querySelector("#p2Display"),
};

const resetButton = document.getElementById("reset");
const winningScoreSelect = document.querySelector("#numbers");
let gameOver = false;
let winningScore = 5;


function updateScore(player,opponent) {
    if (!gameOver){
        player.score++; // update score
        if(player.score === winningScore) { // once p1.score ==== 5, gameOver becomes set to true, and this whole function is an if statement for if it's NOT game over
            player.display.classList.add("has-text-success");
            gameOver = true;
            opponent.display.classList.add("has-text-danger")
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score; // then display the value of the score
    }

};


// selects player one button and incrementally updates score as button is clicked, then displays it
p1.button.addEventListener("click", function() {
    updateScore(p1, p2)
});


// handles player 2 button functions
p2.button.addEventListener("click", function() {
    updateScore(p2, p1)
});

function reset() {
    gameOver = false;
    
    for (const p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}


//pre-refactored reset. Not  necessary, but would help if add additional players
// function reset() {
//     p1.score = 0;
//     p1.display.textContent = p1.score;
//     p2.score = 0;
//     p2.display.textContent = p2.score;
//     p1.display.classList.remove("has-text-success", "has-text-danger");
//     p2.display.classList.remove("has-text-success", "has-text-danger");
//     gameOver = false;
//     p1.button.disabled = false;
//     p2.button.disabled = false;

// }


resetButton.addEventListener("click", function() {
    reset();
});


//"Playing to" score. using "change" instead of "click" because click wouldn't run if you input a number using the keyboard - only if you pressed up/down arrow. Change will follow ANY change.
//set winning score display to equal the value of the input. changes dynamically
winningScoreSelect.addEventListener("change", function() {
    winningScore = Number(this.value);  // have to add "Number()" because otherwise, winningScoreSelect.value becomes a string (from changing input). We could change p1.score/p2.score == winningScore instead of === winningScore, but this is safer
    reset(); // Each time a score is changed, run the reset function, which is the equivalent to clicking the reset button
});
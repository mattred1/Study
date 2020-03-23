var secretNumber = 32;


//Takes guess and store it as string
var stringGuess = prompt("Guess the number! If you're wrong you die");

//Takes guess and converts it from string to number
var guess = Number(stringGuess);




if (guess === secretNumber) {
    alert("Nice job, you're correct!");
}

else if (guess < secretNumber) {
    alert("Go higher, boy.");
}

else if (guess > secretNumber) {
    alert("Get low, girl.");
}

else {
    alert("You're all kinds of wrong");
}


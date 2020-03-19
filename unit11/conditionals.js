var age = Number(prompt("How old are you?"));

if (age < 0) {
    console.log("ERROR");
}

else if (age % 2 && age < 18) {
    console.log("Your age is odd, but also you can't come in!")
}

else if (age % 2 && age < 21) {
    console.log("Your age is odd and you also can't drink, but you can come in!")
}

else if (age < 18) {
    console.log("Sorry, you're not old enough to enter");
}

else if (age < 21) {
    console.log("You can enter, but cannot drink");
}

else if (age === 21) {
    console.log("Happy 21st birthday!");
} 
// can use === because var is being stored as a number instead of a string



else {
    console.log("Come on in. You can drink.");
}



// var answer = prompt("Are we there yet?");

/// While the answer is not equal to yes, prompt them again. It has to be && and not ||. While loops run until the defined condition is no longer met
// while (answer !== "yes" && answer !== "yeah" ) {
//     var answer = prompt("Are we there yet?");
// }

// This won't run until the while loop is over. The user HAS to have typed yes or yeah to get this far
// alert("Yay, we made it!")
// COULD do it this way, but that wouldn't loop
/*
if(answer === yes) {
    alert("Yay, we made it!")
}
else {
    var answer = prompt("Are we there yet?");
}
*/







// V2


var answer = prompt("Are we there yet?");
//get -1 by going to the console and getting the indexOf "yes", which you can do in the console
while (answer.indexOf("yes") == -1) {
    var answer = prompt("Are we there yet?");
}
alert("Yay, we made it!")

//Makes divs fadeout on load
// $("div").fadeOut();


// uses "on" to create function that happens on click. When button is clicked, div's fade out
//divs' display = none over the course of 1 second. 1000 is milliseconds
// $("button").on("click", function () {
//     $("div").fadeOut(1000);
// });


//JS does NOT wait for fade to load next line. If you want it to wait to run, then you can put console.log INSIDE the callback function/fadeOut
//for next project, we're going to want to actually remove code, not just set display:none. We can use .remove for that
// $("button").on("click", function () {
//     $("div").fadeOut(1000, function() {
//         console.log("Fade completed!");
//     });
// });


//Removes divs after they are faded out
// $("button").on("click", function () {
//     $("div").fadeOut(1000, function() {
//         $(this).remove();
//     });
// });


// If I moved it down to outside of the second function, it would no longer wait to run the full second. It would start the full second and then move onto the next line
// $("button").on("click", function () {
//     $("div").fadeOut(1000, function() {
//         // $(this).remove();
//     });
//     $(this).remove();
// });


// Could do this if default display was set to none. Clicking the button would fade divs in
// $("button").on("click", function () {
//     $("div").fadeIn(1000); 
// });


//Changes display of something, based on if it is currently displayed or not
// $("button").on("click", function () {
//     $("div").fadeToggle(1000);
// });


//slideDown() is a cool effect for an element to slide in or out. It changes the height of the element
// can use slideDown(), slideUp(), and slideToggle()
$("button").on("click", function () {
    $("div").slideToggle(1000); // can pass callback in (adding the function() {console.log("butts");} after) which will only run after the slide is done 
});

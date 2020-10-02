//Makes divs fadeout on load
// $("div").fadeOut();



// uses "on" to create function that happens on click. When button is clicked, div's fade out
//divs' display = none over the course of 1 second. 1000 is milliseconds
// $("button").on("click", function () {
//     $("div").fadeOut(1000);
// });



//JS does NOT wait for fade to load next line. If you want it to wait to run, then you can put console.log INSIDE the callback function/fadeOut
//for next project, we're going to want to actually remove code, not just set display:none. We can use .remove for that
$("button").on("click", function () {
    $("div").fadeOut(1000, function() {
        console.log("Fade completed!");
    });
});
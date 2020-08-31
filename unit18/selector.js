//add purple background color and margin to all divs
var haveFun = {
    backgroundColor: "purple",
    // margin: "20px auto"
}
$("div").css(haveFun);

//select divs with class "highlight" and give them 200px width
$(".highlight").css("width", "200px");

//select div with id "third" and give it an orange border
$("#third").css("border", "10px solid orange");

//select first div and change font color to pink
$("div:first-of-type").css("color", "pink");
//could also use "div"first" which is a jQuery shortcut, but a little slower, so it's better to use native CSS
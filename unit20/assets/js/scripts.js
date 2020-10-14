// Click li to gray out/crossoff
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});



// Click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(600, function() { //removes entire parent, aka "li"
        $(this).remove(); //refers to parent, since it's refering to "this" aka basically what it's contained in
    }); 
    event.stopPropagation();
});
// Notes:
//event bubbling - event bubbles up to parent elements. in this case, clicking "span" is ALSO clicking "li", which is ALSO clicking "ul" and "#container" and "body" etc




$("input[type='text'").keypress(function(e) {
    if(e.which === 13) { 
        //grab new todo from text input
        var todoText = $(this).val();
        //sets text input value to blank
        $(this).val("");
        //create a new li, add to ul
        $("ul").append("<li><span>X</span> " + todoText  + "</li>");
    }
});
// Notes:
// enter is character key 13, which is why we used "=== 13"
//event is named e in this case, but I could name it whatever I want
// Click li to gray out/crossoff
$("li").click(function() {
    $(this).toggleClass("completed");
});



// Click on X to delete todo
$("span").click(function(event) {
    $(this).parent().fadeOut(600, function() { //removes entire parent, aka "li"
        $(this).remove(); //refers to parent, since it's refering to "this" aka basically what it's contained in
    }); 
    event.stopPropagation();
});
//event bubbling - event bubbles up to parent elements. in this case, clicking "span" is ALSO clicking "li", which is ALSO clicking "ul" and "#container" and "body" etc
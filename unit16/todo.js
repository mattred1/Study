var allLis = document.querySelectorAll("li");

//only happens on initial mouseover/hover. Stays green though
for (var i = 0; i < allLis.length; i++) {

    allLis[i].addEventListener("mouseover", function() { // here, this refers to the element that the event was triggered on. Easy reference
        this.classList.add("selected");
    });
//use classes instead of manipulating styles because it's css' job to do the style heavy lifting
    allLis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });

    allLis[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });

}




//This was used for only the top <li>. In order to have the hover effect for all <li>'s we had to use a loop.
// firstLi.addEventListener("mouseover", function() { 
//     firstLi.style.backgroundColor = "green";
//     firstLi.style.fontSize = "2rem";
// });

// firstLi.addEventListener("mouseout", function() {
//     firstLi.style.backgroundColor = "white";
//     firstLi.style.fontSize = "1rem";

// });
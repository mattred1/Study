var firstLi = document.querySelector("li");

//only happens on initial mouseover/hover. Stays green though
firstLi.addEventListener("mouseover", function() { 
    firstLi.style.backgroundColor = "green";
    firstLi.style.fontSize = "2rem";
});

firstLi.addEventListener("mouseout", function() {
    firstLi.style.backgroundColor = "white";
    firstLi.style.fontSize = "1rem";

});
//Want something to happen when I click on an individual <li> by attaching a separate listener to each <li>
var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {  // this starts at the first li, and loops through each <li> - the full length of the li's
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";                 //this in addEventListener refers to the item that was clicked on, in this case "lis[i]"
    })
};
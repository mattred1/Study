var button = document.querySelector("button");
var darkMode = false;

// button.addEventListener("click", function() {
//     if (darkMode) {
//         document.body.style.background = "white";
//         button.style.background = "#EFEFEF";
//     } else {
//         document.body.style.background = "#212121";
//         button.style.background = "red";
//     }
//     darkMode = !darkMode;
// });


// Refactored, like WOAH
button.addEventListener("click", function() {
    document.body.classList.toggle("getDark");
});

var button = document.querySelector("button");
var darkMode = false;

button.addEventListener("click", function() {
    if (darkMode) {
        document.body.style.background = "white";
        button.style.background = "#EFEFEF";
        darkMode = false;
    } else {
        document.body.style.background = "#212121";
        button.style.background = "red";
        darkMode = true;
    }
});

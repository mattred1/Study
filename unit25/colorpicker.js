//Grabs button
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

//Generates a random color between 1-255 and returns it
function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    //if dark background, change font color to white
    if (r < 150 && g < 150 && b < 150) {
        h1.classList.add('light')
    } else {
        h1.classList.remove('light')
    }

    return newColor = `rgb(${r}, ${g}, ${b})`

}



//runs randomColor and plugs that applies that new color to background, changes h1 text
btn.addEventListener('click', function() {
    randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;

})


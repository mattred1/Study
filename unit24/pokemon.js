// Variables that won't change
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'


// Create new image inside of #container

for (let i = 1; i < 152; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`
    const newImg = document.createElement('img');
    pokemon.classList.add('pokemon');
    newImg.src= `${baseURL}${i}.svg`;
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);

}
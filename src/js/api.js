let button = document.getElementById('btbBuscar');
let section = document.getElementsByClassName('pokemons');
let attribute;
let value;

button.addEventListener('click', () => {
    attribute = document.getElementsByName('drone').value;
    value = document.getElementById('txtBuscar').value;    
    console.log(value);
})

const getPokemons = async(value, attribute) => {
    const url = attribute == 'pokemon' ? `https://pokeapi.co/api/v2/pokemon/${value}` : `https://pokeapi.co/api/v2/pokedex/${value}`
    const response =  await fetch(url);
    const data = await response.json();
    return data;
}

getPokemons('2', 'pokedex').then(data => {
    if(attribute == 'pokemon'){
        let name = document.createTextNode(data.name);
        let sprite = data.sprites.back_default;   
        let div = document.createElement('div');  
        let img = document.createElement('img');
        img.src = sprite;
        img.className('pokemon-img');
        let p = document.createElement('p');
        p.appendChild(name);
        p.className('pokemon-name');
        div.appendChild(img);
        div.appendChild(p);
        div.className('pokemon');
        section.appendChild(div);
    }else{
        console.log(data);
    }
    
});
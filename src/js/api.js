let button = document.getElementById('btbBuscar');
let section = document.getElementsByClassName('pokemons')[0];
let attribute;
let value;

button.addEventListener('click', () => {
    attribute = getSelectedSearch();
    value = document.getElementById('txtBuscar').value;    
    console.log(value);
    console.log(attribute);

    

getPokemons(value, attribute).then(data => {
    console.log('aqui')
    if(attribute == 'pokemon'){
        let name = document.createTextNode(data.name);
        let sprite = data.sprites.back_default;   
        let div = document.createElement('div');  
        let img = document.createElement('img');
        img.src = sprite;
        img.className = 'pokemon-img';
        let p = document.createElement('p');
        p.appendChild(name);
        p.className = 'pokmeon-name';
        div.appendChild(img);
        div.appendChild(p);
        div.className = 'pokemon';
        section.appendChild(div);
        console.log('ready')
    }else{
        console.log(data);
    }
    
});
})

const getPokemons = async(value, attribute) => {
    const url = attribute == 'pokemon' ? `https://pokeapi.co/api/v2/pokemon/${value}` : `https://pokeapi.co/api/v2/pokedex/${value}`
    const response =  await fetch(url);
    const data = await response.json();
    return data;
}



function getSelectedSearch(){
    let rates = document.getElementsByName('drone');
    let rate_value;
    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
         }
    }
    return rate_value
}
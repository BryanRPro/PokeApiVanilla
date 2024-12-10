// Variables
const pokemonlist = document.getElementById("pokemonList")
const pokemonDetail = document.getElementById("pokemonDetail")
const pokemoninfo = document.getElementById("pokemoninfo")
async function fetchpokemondata(pokemonid) {
    let endpoint = "https://pokeapi.co/api/v2/pokemon/" + pokemonid;
    const response = await fetch(endpoint)
    const pokemon = await response.json();
    return pokemon;
       
}

function Displaypokemon(pokemon){
    console.log(pokemon)
    const pokemoncard = document.createElement("div")
    pokemoncard.classList.add("pokemoncard")
    pokemoncard.innerHTML = `
    <h3 class="name">${pokemon.name}</h3>
    <h2 class="idnumber"></h2>${pokemon.id}</h2>
    <img src=${pokemon.sprites.front_shiny} alt="${pokemon.name}">
    <h3>tipos del pokemon</h3>
    <p>${pokemonTypes}</p>
    `
    // agregamos la funcionalidad del click para llamar la vista especifica.
    pokemoncard.addEventListener("click",()= 
    })

   
async function loadpokedex() {
const pokemon = await fetchpokemondata(130)
Displaypokemon(pokemon)
}

loadpokedex()
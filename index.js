//DESARROLLA AQUI TUS SOLUCIONES

//1.

async function getRandomPokemon(){

let id = Math.floor(Math.random()*1292)

let response =  await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
let pokemon = await response.json()

return pokemon
}

//2Declara una funcion **getImageAndName** que retorne el nombre y la URL de la imagen de un pokemon => (return {img, name}) > La función retorna el nombre y la URL de la imagen de un pokemon


async function getImageAndName(){

let response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
let resPoke = await response.json();

let name = resPoke.name;
let img = resPoke.sprites.front_default;

return {img, name}
}

//3Declara una funcion printImageAndName que retorne el string necesario para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:<section>
    // <img src="url de imagen" alt="nombre del pokemon">
//   <h1>Nombre del pokemon</h1>
// </section>


async function printImageAndName(){

let response = await fetch("https://pokeapi.co/api/v2/pokemon/1")
let resPoke = await response.json();

let name = resPoke.name;
let img = resPoke.sprites.front_default;


return `<section>
<img src="${img}" alt="nombre del pokemon">
<h1>Nombre del pokemon: ${name}</h1>
</section>`
}



//4Declara una función getRandomDogImage que retorne la url de la imagen de un perro aleatorio


async function getRandomDogImage(){

    let response =  await fetch("https://dog.ceo/api/breeds/image/random")
    let dog = await response.json()
    
    return dog.message
    }


//5 Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio. > La función retorna la URL de la imagen de un pokemon aleatorio

async function getRandomPokemonImage(){

let id = Math.floor(Math.random()*1292)

let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
let pokemon = await response.json()


return pokemon.sprites.front_default
}


//Pokémon vs Perritos

async function getRandomPokemonDog(){

    let id = Math.floor(Math.random()*1292)
    
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`) 
    let pokemon = await response.json()

    let response2 =  await fetch("https://dog.ceo/api/breeds/image/random")
    let dog = await response2.json()

    let img = pokemon.sprites.front_default
    let img2 = dog.message

    let dom=  `<section id="pelea">
    <img src="${img}" id="pokemon" alt="nombre del pokemon">
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png?20200807133458" id="versus" alt="versus">
    <img src="${img2}" id="perro"alt="nombre del perro">
    </section>`
  
    return  document.querySelector("main").innerHTML+=dom
}


getRandomPokemonDog();
//6 

async function getRandomCharacter(){

    let id = Math.floor(Math.random()*826)
    let response =  await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    let rick = await response.json()
    
    return rick

 }

getRandomCharacter();

//8
 async function getRandomCharacterInfo(){

    let id = Math.floor(Math.random()*826)
    let response =  await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    let rick = await response.json()
    
    let name= rick.name
    let img = rick.image
    let episodes = rick.episode
    let firstEpisode = rick.episode[0]

    let response2 = await fetch(firstEpisode)
    let  x = await response2.json()
    let dateEpisode = x.air_date
    

return {img, name, episodes, firstEpisode, dateEpisode} 
 }

 getRandomCharacterInfo();


 //DOM RICK MORTY

 async function getRandomCharacterInfoDom(){

    let id = Math.floor(Math.random()*826)
    let response =  await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    let rick = await response.json()
    
    let name= rick.name
    let img = rick.image
    let episodes = rick.episode
    let firstEpisode = rick.episode[0]

    let response2 = await fetch(firstEpisode)
    let  x = await response2.json()
    let dateEpisode = x.air_date
    

    let dom = `<section id="rickymorty">
    <img src="${img}" id="charRandom" alt="nombre del personaje">
    <p><b>Nombre</b>: ${name}</p>
    <p><b>Episodios</b>: ${episodes}</p>
    <p><b>Primer episodio</b>: ${firstEpisode}</p>
    <p><b>Fecha de estreno</b>: ${dateEpisode}</p>
    </section>`

    return  document.querySelector("main").innerHTML+=dom
    
    }

    getRandomCharacterInfoDom();




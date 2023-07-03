


const baseURL = 'https://pokeapi.co/api/v2/';

const pokeContainer = document.getElementById('pokemon-container');
const btnFetch = document.getElementById('btn_fetch2');


btnFetch.addEventListener('click', async () =>{
    const pokemon_primer = await fetchPokemon();

    pokemon_primer.results.forEach(async (pokemon_primer)  => {
       const pokemon =  await fetch(baseURL +'pokemon/'+pokemon_primer.name)
       const parsedData2 = await pokemon.json();
       console.log(parsedData2);
    });
})

const fetchPokemon = async () =>{

    //TRY Y CATCH son una funcion del fetch para hacer solicitud
    try{ //Intenta ejecutar la siguiente linea y si lo logra ejecuta lo demas
        const data = await fetch(baseURL + 'pokemon?limit=151');
        const parsedData = await data.json();
        return parsedData;
    }
    catch(error_recivido){ //Atrapa el error en el catch 
        console.error(error_recivido)
    }
}

// fetchPokemon(); 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//==========La parte de arriba es lo que hicimos con ZAB antes de que reiciera la funcion de abajo y que usamos para hacer lo de las targetas===========================
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    
//     const CARD_SECTION = document.getElementById('pokemons-container');

//     const BASE_URL = 'https://pokeapi.co/api/v2';

//     const pokeContainer = document.getElementById('pokemons-container');
//     const btnFetch = document.getElementById('btn-fetch');

// btnFetch.addEventListener('click', async () => {
//     const pokemons = await fetchPokemon(BASE_URL + '/pokemon?limit=151');

//     pokemons.results.forEach(async (pokemon) => {
//         const data = await fetchPokemon(BASE_URL + '/pokemon/' + pokemon.name);
//         console.log(data);
        
//         Renderizar(data);
        
//     })
// })

// // https://pokeapi.co/api/v2/pokemon/

// const fetchPokemon = async (url) => {
//     try {
//         const data = await fetch(url);
//         const parsedData = await data.json();
//         return parsedData;
//     } catch (err) {
//         console.error(err);
//     }
// }



// ///Funciones para crear cartas


// const createCard = () => {
//     const card = document.createElement('div');
//     const imgContainer = document.createElement('div');
//     const infoContainer = document.createElement('div');
//     card.classList.add('card');
//     card.append(imgContainer, infoContainer);
//     return card
// }

// const createDescription = () => {
//     const userElements = {
//         name: document.createElement('h3'),
//         type: document.createElement('p'),
//         height: document.createElement('p'),
//         abilties: [],
//     }
//     return userElements;
// }


// const populateElements = (userElements, data) => {
//     userElements.name.textContent = "Nombre: "+data.name;
//     userElements.type.textContent = "Tipo(s): ";
//     userElements.height.textContent = "Altura: "+data.height;

//     const abilities = data.types.map(e => {
//         const ulElement = document.createElement('ul');
//         ulElement.textContent = e.type.name;
//         return ulElement;
//     })

//      //const tipos = data.types.map(type => type.type.name);

//     userElements.abilties = abilities;
//     return userElements;
// }

// const renderElements = (elements, card, data) => {
//     const img = document.createElement('img');
//     const link = data.sprites.front_default;
//     img.setAttribute('src',link);
   

//     card.children[0].append(img);
//     card.children[1].append(elements.name, elements.height, elements.type);
//     elements.abilties.forEach(e => card.children[1].append(e));
// }


// const Renderizar=(data => {
//     const card = createCard();
//     const userElements = createDescription();
//     const populatedElements = populateElements(userElements, data);
//     renderElements(populatedElements, card, data);
//     CARD_SECTION.appendChild(card);
// });


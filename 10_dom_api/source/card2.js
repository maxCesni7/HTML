const IMAGE_URL = 'https://placehold.co/200';

// const IMAGE_CONTAINER = document.querySelector('.img_container');
// const INFO_CONTAINER = document.querySelector('.info_container');
const CONTAINER = document.querySelector('.cards');
const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const createDescription = user => {

    const carta = document.createElement('div');
    carta.className = 'card';
    carta.id = "div_container";
    CONTAINER.appendChild(carta);

    const image = document.createElement('img');
    image.src = IMAGE_URL;
    image.alt = 'User Photo';
    carta.appendChild(image);

    const user_name = document.createElement('h1');
    const description = document.createElement('p');
    const age = document.createElement('p');
    const bands = document.createElement('ul');

    user_name.textContent = user.user_name;
    description.textContent = user.description;
    age.textContent = user.age;

    
    user.fav_music.bands.forEach(bandName => {
    const band = document.createElement('li');
    band.textContent = bandName;
    bands.appendChild(band);
    });

    carta.appendChild(user_name); 
    carta.appendChild(description);
    carta.appendChild(age);
    carta.appendChild(bands);
}

// Poblamos elementos
// const fillDescription = user => {
//     user_name.textContent = users.user_name;
//     description.textContent = users.description;
//     age.textContent = users.age;
//     bands.textContent = users.fav_music.bands;
//     }

users.forEach(user => {
    console.log(user);

     createDescription(user);
    // populateDescription(user);
    // renderDescription(user);
})


// Creamos imagen




// users.forEach(user => {
    
//     const crear = user =>{
//     INFO_CONTAINER.append(createDescription);}
// })



// users.forEach(user => {
//     const userDesc = createDescription(user);
//     INFO_CONTAINER.appendChild(createDescription);
//   })

// // Renderizamos elementos
// IMAGE_CONTAINER.appendChild(image);
// // INFO_CONTAINER.append(user_name, description, age, ...bandList);
// const crear = user =>{
//     INFO_CONTAINER.append(user_name, description, age, ...bandList);
// }






// const container = document.createElement('div');
//     container.appendChild(img);
//     return container;
// // obtiene el id del html donde se va a imprimir
// const containerDiv = document.getElementById('container');
// // y se recorre todo lo anterior para cada usuario
// users.forEach(user => {
//     const userDesc = createDesc(user);
//     containerDiv.appendChild(userDesc);
//   })
// // perdon funcion flecha XD



// primero va esta parte
// const user_name = document.createElement('h3');
// // para cada uno de los atributos
// // depues se obtiene el valor/texto y se le asigna
// user_name.textContent = user.user_name;
// // despues se hacer el recorrido de las bandas
// user.musica_fav.lista.forEach(bandName => {
//       const band = document.createElement('li');
//       band.textContent = bandName;
//       bands.appendChild(band);
//     });
// y se empiezan a genera
// const container = document.createElement('div');
//     container.appendChild(img);
// return container;
// // obtiene el id del html donde se va a imprimir
// const containerDiv = document.getElementById('container');
// // y se recorre todo lo anterior para cada usuario
// users.forEach(user => {
//     const userDesc = createDesc(user);
//     containerDiv.appendChild(userDesc);
//   })
// // perdon funcion flecha XD
//Math.PI; Ejemplo de constante en de pi desde la libreria. 
const IMAGE_URL = 'https://placehold.co/200'; //Se crea una cosntante con el URL DE LA imagen 
const IMAGE_CONTAINER = document.querySelector('.img_container'); //Se obtine la clase del contenedor en este caso del div con la clase img_container.

const INFO_CONTAINER = document.querySelector('.info_container');


//Creacion de un imagen 

const imagen = document.createElement('img'); //Creacion de una imagen 
imagen.src = IMAGE_URL; //Se le añade como source la constante de IMAGE_URL
imagen.alt = 'User Photo'; //Se le añade de Alt = User Photo

IMAGE_CONTAINER.appendChild(imagen); //Se añade al html dentro del div 



//Se declara la descripcion de la informacion que se va añadir dentro de info container. 

const USER ={
    id: 1, 
    user_name: 'Max Cesni',
    description: 'Me gusta el anime', 
    age : '25',
        animes_favoritos: {
            lista: [
                'Hunterxhunter' , 'Naruto', 'FMA BROTHERHOOD', 'FATE ZERO'
            ]
        }
}


//Crear descripcion 

const description = document.createElement('p');
const age = document.createElement('p');
const user_name = document.createElement('p');
const animes = document.createElement('ul');


const animes_favoritos= USER.animes_favoritos.lista.map(e => {
    const item = document.createElement('ul');
    item.textContent = e;
    return item;
});

//Añadimos los elementos del usuario
user_name.textContent = USER.user_name; 
description.textContent = USER.description;
age.textContent = USER.age;
animes.textContent = USER.animes_favoritos.lista; //SE AGREGA OTRO ELEMENTO CON LA LIST DE ANIMES

INFO_CONTAINER.append(user_name, description, age, ...animes_favoritos); //Se añaden varios elementos a la vez.


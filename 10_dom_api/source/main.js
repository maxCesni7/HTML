const inputNombre = document.getElementById("nombreInput");
//Sincronia de documentos-> cuando el html y js se cargan a la vez
const parrafo = document.getElementById('texto');

const parrafo2 = document.querySelector(`#id`); //No especifica entre clase o id, debemos usar . o # para identificar los elementos. 
const parrafoAll = document.querySelectorAll(`.texto`);

console.log(inputNombre);
console.log(inputNombre.getAttribute("id"));
console.log(inputNombre.id);//segunda forma de obtener el id

console.log(parrafo);
console.log(parrafo2);
console.log(parrafoAll);


//Manipulación del DOM

//inputNombre.value = "Hola soy un input"; //Manipular el valor de un input dentro de su casillo. 

//document.getElementById(`texto`).innerHTML = "Modificamos el texto."; //Modificar el elemento de texto dentro del html




// ===========LLAMADA DE UNA FUNCIÓN CON UN EVENTO  con la llamada de una función.

// inputNombre.addEventListener('input', actualizarTexto);

// function actualizarTexto(e){
//     parrafo.textContent = e.target.value; 
// }


inputNombre.addEventListener('input', e => {
    parrafo.textContent = e.target.value;
}); //Forma de funcion de flecha donde ya no es necesario llamar a la función de tipo en una nueva linea. 

// inputNombre.addEventListener('input', e => parrafo.textContent = e.target.value); Otra forma con la llamada de un función flecha. Sin el contenido de los corchetes. 


//============Crear y agregar un nuevo eleemnto desde el css al body y a una parte especifica del html. 

const divParrafo = document.getElementById('div_container'); //Para colocar un elemento dentro de otro hay que obtener el primer id de donde se quiera incluir

const p = document.createElement('p'); //Se crea un nuevo elemento p ->Parrafo
p.textContent = 'Agregado desde JS'; //Se añade un valor a ese nuevo parrafo

// divParrafo.appendChild(p); //Se añade el elemento al nuevo contenedor de donde se obtuvo el id. 

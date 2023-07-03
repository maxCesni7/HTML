/**
 * Axios
 * Es una libreria de JS que se puede utilizar para realizar solicitudes http que funcionan en el buscador y en NodeJS
 * Esta basado en promesas, y nospermite escribir código async/await para realizar solicitudes.
 * 
 * --async es una manera de trabajar con promesas ya que asegura que una función devuelva una promesa.
 * --Await hace que JS espere que la promesa se cumpla y devuelva su resultado. 
 * 
 * https://axios-http.com/docs/example -> Documentacion del sitio oficial de axios. 
 */

const axios = require('axios');

async function makeGetRequest(){
    const response = await axios.get('https://rickandmortyapi.com/api/character/171');
    let data = response.data;//Todos los datos de la api de rick y morty la guarda en esta nueva variable. 
    console.log(data);
}

makeGetRequest();
/**
Para correr el package desde axios-get agrego las dependencias en el script del archivo package.json:
    "axios-get": "node simpleGet.js"
Posteriormente utilizo el comando
 */
//$ npm run axios-get

// comandando para actualizar el paquete en npm npm $ publish --acces=public
import {useEffect, useState} from "react";
import './Astros.css'

const API_URL = 'http://api.open-notify.org/astros.json';

const Astros = () =>{
    const [astros, setAstros] = useState([]);
    
    const fetchData = () => { //Funcion para petición a la API
        fetch(API_URL)
            .then(res => res.json()) //Le dice que cuando obtenga la respuesta la paarsee a JSON
            .then(data => setAstros(data.people))//Guardamos la información en data con el hook declarado arriba. 
            // .then(data => console.log(data))
            .catch(err => console.error(err));//Atrapamos el error. 
    }

    useEffect(() =>{
        fetchData();
    }, []);


   const astrosCards = astros.map((astro, index) => (
    <div className="astro--card" key={astro.name}>
        <h1 className="astro--name">
            {astro.name}
        </h1>
        <h3 className="astro--craft">
            {astro.craft}
        </h3>
    </div>
   ))

   return (
    <div className="astros--cards">
        {astrosCards}
    </div>
   )
}

export default Astros;
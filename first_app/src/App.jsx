// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import Astros from './Components/Astros/Astros';
import Apod from './Components/Apod/Apod';
import './App.css'
import Appbar from './Components/Appbar/Appbar';
import { Route, Routes} from 'react-router-dom';
import { Login } from '@mui/icons-material';



//CONSTANTE DE LOGIN
const isLogged = true; 
//Guardamos en local Storage


const userData = {
  name: 'Max',
  age: 25
}
//link para personas en el espacio
//link para API NASA
// Logo /link para login o para ver perfil. 
//http://open-notify.org/Open-Notify-API/People-In-Space/

///const links = ['astros', 'apod', true];
const links = [
   {
    "name": 'ASTROS',
    "link": 'astros' 
  },
  {
    "name" : 'APOD',
    "link": 'apod'
  }, 

]
//Navbar

//Main -----------
//Astros ---------RUTA: / ASTROS
//APOD ----------- RUTA /apod


function App() {
  // const [count, setCount] = useState(0)//Esto es un hook
    useEffect(() => {
      localStorage.setItem('login', JSON.stringify(isLogged))
    }, [isLogged]);  
    

  return (
    <>
      <Navbar 
          links={links}
          isLogged={JSON.parse(localStorage.login)}
      />
      <Routes>
        <Route  
              path='/' 
              element={<Main user={userData}/>}
        />
        <Route 
              path='/astros' 
              element ={<Astros/>}
        />
        <Route
            path='/Apod' 
            element ={<Apod/>}
        />
        
        {/* <Appbar/> */}
        
        {/* <Main {...userData} /> Forma desestructurada del objeto 3.0*/}
        {/* //<Astros/> */}
        
      </Routes>
    </>
  )
}

export default App
{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
import './App.css'
import Boton from './components/Boton.jsx'
import Contador from './components/Contador.jsx'
import logo from './img/freecodecamp-logo.png'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const aumentarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img 
      className='freecodecamp-logo'
      src={logo} 
      alt='Logo de FreeCodeCamp'/>
     </div>
     <div className='contenedor-principal'>
      <Contador numClics={numClics} />
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={aumentarClic} />
      <Boton
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador} />
     </div>
    </div>
  )
}

export default App

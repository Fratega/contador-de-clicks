import '../stylesheets/boton.css'

// Desestructuramos el objeto props y pasamos solo el valor "texto"
function Boton({ texto, esBotonDeClic, manejarClic }) {
  return (
    <div>
        <button 
            className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            onClick={manejarClic}>
            {texto}
        </button>
    </div>
  )
}

export default Boton;
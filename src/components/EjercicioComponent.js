import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const EjercicioComponent = ({anio}) => {

  const [anio_actual, setAnioActual] = useState(anio)

  const cambioAnio = (e, anio_actual)=>{
    setAnioActual(anio_actual)
  }

  const anioSiguiente = (e)=>{
    setAnioActual(anio + 1)
  }

  const anioActual = (e)=>{
    setAnioActual(anio - 1)
  }

  return (
    <div>
      <h2>Ejercicios con eventos y useState</h2>

      <strong className="label label-green">
            {anio_actual}
      </strong>
      
      &nbsp;

      <button onClick={(e)=> anioSiguiente(e)}>Año Siguiente</button>

      &nbsp;
      <button onClick={(e)=> anioActual(e)}>Año anterior</button>

      &nbsp;
      <input type="text" onChange={(e)=> cambioAnio(e, e.target.value)} />

    </div>
  )
}


EjercicioComponent.propTypes = {
    anio: PropTypes.number.isRequired
}   

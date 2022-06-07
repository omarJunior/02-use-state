import React, { useState } from 'react'

export const MiPrimerEstado = () => {

    const [nombre, setNombre] = useState("Victor Robles")

    const cambiarNombre = (e, nombreFijo)=>{
        setNombre(nombreFijo)
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>
            {nombre}
        </strong>
        &nbsp;
        <button
            onClick={(e)=> cambiarNombre(e, "Francisco")}>
            Cambiar nombre por fran
        </button>
        &nbsp;
        <input type="text" onKeyUp={(e) => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre....'/>

    </div>
  )
}

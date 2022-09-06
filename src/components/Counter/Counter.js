/*import React, { useState } from 'react'
import './counter.css';

/*
const Counter = ({stock, inicial, onAdd}) => {
  
  const[count, setCount] = useState(inicial);
      
    const sumar = () =>{
      if (count < stock) {
             setCount(count + 1);
      } else {
        alert("Limite de turnos disponible")
      }    
    }

    const restar = () =>{
      if (count === 1){
        alert ("No puede dejar el carrito vacio");
      } else {
        setCount(count - 1);
      }
    }

   const SolicitarT = () => {
     if (count <= 3){
      alert("Turno solicitado con exito");
     } else  {
        alert("Ocurrio algun error")
     }

   } 
   

  return (
   <div>
        <button className='count-' onClick={sumar}>+</button>
        <button className='count-' onClick={restar}>-</button>
        <button className='ST-' disabled={count <= -0} onClick={SolicitarT}>Solicitar turno/s</button>
        <p>Cantidad: {count}</p>

    </div>
  )
}*/

/*

const Counter = ({stock, initial = 1, onAdd}) => {
  const [counter, setCounter] = useState(initial)

  const addCounter = () => {
      counter < stock && setCounter( counter + 1 )
  }

  const subtractCounter = () => {
      counter > initial && setCounter( counter - 1 )
  }
  
  return(
    <div >
      <p>{counter}</p>
      <div>
      <button onClick={subtractCounter}>-</button>
          <button onClick={addCounter}>+</button>
          <button className='ST-'>Solicitar turno/s</button>
      </div>
  </div>
  )

}

export default Counter
*/
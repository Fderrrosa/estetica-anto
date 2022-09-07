import React, { useState } from 'react'
import './counter.css';


const Counter = ({ stock, onAdd, inicial }) => {
  
  const[count, setCount] = useState(inicial);
      
    const sumar = () =>{
      count < stock && setCount(count + 1);
      
    }
    const restar = () =>{
      if (count === 1){
        alert("No se puede quedar el carrito vacio")
      } else {
        setCount(count - 1);
      
      }
    }
     
  return (
    <div>
    <button className='count-' onClick={sumar}>+</button>
    <button className='count-' onClick={restar}>-</button>
    <button className='ST-' disabled={count <= -0} >Solicitar turno/s</button>
    <p>Cantidad: {count}</p>
      
    </div>
  )
}

export default Counter;


/*setCount(count - 1);
const Counter = ({stock, inicial, onAdd}) => {
  
  const[count, setCount] = useState(inicial);
      
    const sumar = () =>{
      if (count < stock) {
             setCount(count + 1);
      } else {
      }    
    }
    const restar = () =>{
      if (count === 1){
        
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




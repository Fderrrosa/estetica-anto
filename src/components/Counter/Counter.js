import React, { useEffect, useState } from 'react'
import './counter.css';


const Counter = ({ stock, onAdd, inicial = 0}) => {
  
  const[count, setCount] = useState(inicial);




    useEffect(() => {
      setCount(inicial);
    }, [inicial]);

      
    const sumar = () =>{count < stock && setCount(count + 1);}

    const restar = () =>{if (count === 1){alert("No se puede quedar el carrito vacio")} 
    else {setCount(count - 1);}}
     
  return (
    <div>
    <button className='count-' onClick={sumar}>+</button>
    <button className='count-' onClick={restar}>-</button>
    <button className='ST-' disabled={count <= -0} onClick={() => onAdd(count)}>Solicitar turno/s</button>
    <p>Cantidad: {count}</p>
    </div>
  )
}

export default Counter;












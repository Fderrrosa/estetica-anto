import React from 'react'
import Form from '../Form/Form'
import './cart.css';

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const Cart = () => {


  const { cart, eliminarProd, clearCart, totalPrice } = useContext(CartContext);

  const total = totalPrice();
  console.log(cart);
  

  if (cart.length === 0) {
    return <h1 className='vacio'>El carrito esta vacio</h1>;
  }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'Center',
      flexDirection: 'column',
      margin: '20px',
      }}>


            {cart.map((prod) => (
                <div key={prod.id} style={{
                  border: '1px solid black',
                  borderRadius: '8px',
                  display: 'flex',
                  padding: '8px',
                  justifyContent: 'space-around',
                  margin: '8px' }}>

                    <h2>{prod.title}</h2>
                    <h3> Cantidad: {prod.cantidad}</h3>
                    <h3> Precio${prod.price}.-</h3>
                    <button onClick={() => eliminarProd(prod.id)}>
                        Eliminar producto
                    </button>
                    
                </div>
        
            ))}
    <button onClick={clearCart} style={{padding: '10px', margin: '20px'}}>Limpiar carrito</button>
    <h4>Total: ${total}</h4>
    <p>¡Finaliza tu compra!👇​👇​👇​</p>
    <Form />
    
    </div>
  )
}

export default Cart
import React from 'react'
import Form from '../Form/Form'

import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const Cart = () => {


  const { cart, eliminarProd, clearCart } = useContext(CartContext);

  console.log(cart);
  




  return (
    <div style={{display: 'flex', justifyContent: 'Center', flexDirection: 'column', margin: '20px'}}>
            {cart.map((prod) => (
                <div key={prod.id}>
                    <h2>{prod.title}</h2>
                    <button onClick={() => eliminarProd(prod.id)}>
                        Eliminar producto
                    </button>
                    
                </div>
        
            ))}
    <button onClick={clearCart} style={{padding: '10px', margin: '20px'}}>Limpiar carrito</button>
    <p>¡Finaliza tu compra!👇​👇​👇​</p>
    <Form />
    
    </div>
  )
}

export default Cart
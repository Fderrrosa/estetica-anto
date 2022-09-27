import React, { useState, useContext } from 'react'
import Form from '../Form/Form'
import './cart.css';
import {Link} from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const Cart = () => {

    const[idCompra, setIdCompra] = useState('');

  const { cart, eliminarProd, clearCart, totalPrice } = useContext(CartContext);

  const total = totalPrice();
 
  
  const handleId = (id) => {
    setIdCompra(id)
  };

  if (idCompra) {
    return <>
    <h1 className='vacio'>Gracias por la compra.</h1>
     <h2> Tu id es: {idCompra}</h2>
     <p>Nos vamos a estar comunicando con vos por E-mail para confirmar dia y hora. Recorda que acabas de soliciar un turno; y se termina de confirmar cuando se coordine un dia y horario.</p>
     <h3>Saludos!</h3>
    </>
  }


  if (cart.length === 0) {
    return <h1 className='vacio'>El carrito esta vacio. Podes ir al <Link to='/'>Inicio</Link> para ver los servicios</h1>;
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
    <Form 
       cart={cart}
       total={total}
       clearCart={clearCart}
       handleId={handleId}
    />
    
    </div>
  )
}

export default Cart
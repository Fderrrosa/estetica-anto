import React, {  useState } from 'react';

import { 
  addDoc, 
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig';



//import { CartContext } from '../../context/CartContext';
//import Cart from '../Cart/Cart';


const Form = ({ cart, total, handleId, clearCart }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
   
    const [phone, setPhone] = useState('');


    
  


const handleSubmit = (event) => {
    event.preventDefault();
    

    const order ={
      buyer: { 
        nombre: nombre,
        apellido: apellido,
        mail: mail,
        phone: phone,
       },
      items: cart.map((products) => ({
        id: products.id,
        title: products.title,
        price: products.price,
      })),
      total: total,
      date: serverTimestamp(),
    };

    
    const ordersCollection = collection(db, 'orders');
       
    addDoc( ordersCollection, order )
    .then((res) => {
      handleId(res.id);
      clearCart()
    });
     
  };




const handleNameInput = (event) => {
    setNombre(event.target.value);
};


const handleChangeApellido = (event) => {
    setApellido(event.target.value);
};


const handleChangeMail = (e) => {
  setMail(e.target.value);
}

const handleChangePhone = (e) => {
  setPhone(e.target.value);
}







  return (
    <div style={{ marginTop: '20px' }}>
        <form action="" onSubmit={handleSubmit}>
            <input 

              type="text"
              placeholder='Nombre...' 
              name='nombre' 
              value={nombre} 
              onChange={handleNameInput} 
              />


            <input 
            
              type="text" 
              placeholder='Apellido...' 
              name='apellido' 
              value={apellido} 
              onChange={handleChangeApellido} 
              /> 

              <input
                 
                 type="mail"
                 placeholder="E-mail"
                 name="email"
                 value={mail}
                 onChange={handleChangeMail}
              />

                <input
                 
                 type="cel"
                 placeholder="Numero de celular"
                 name="phone"
                 value={phone}
                 onChange={handleChangePhone}
              />
              
 
                
              



            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form







import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    



    const addToCart = (item, cantidad) => {
      
        if (isInCart(item.id)) {
            alert('¡Ya solicitaste el turno muchas veces!')
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };


   // corroborando si el servicio ya está en el carrito
   const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
};


  // sumando la cantidad del mismo servicio
 const sumarCantidad = (item, cantidad) => {
    const carritoActualizado = cart.map((prod) =>
        prod.id === item.id
            ? { ...prod, cantidad: prod.cantidad + cantidad }
            : prod
     );
     setCart(carritoActualizado);
 };


//eliminar un solo servicio pasandole el id
const eliminarProd = (id) => {
    console.log(`eliminando producto ${id}`);
    const carritoFiltrado = cart.filter((prod) => prod.id !== id);
    setCart(carritoFiltrado);
};



 //vaciar todo el carrito
 const clearCart = () => {
    setCart([]);
};



console.log(cart);



    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, eliminarProd }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
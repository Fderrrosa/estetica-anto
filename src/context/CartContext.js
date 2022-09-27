import React from 'react';
import { createContext, useState } from 'react';

export const CartContext = createContext();



const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    

    const addToCart = (item, cantidad) => {
      
        if (isInCart(item.id)) {
           
            totalQuantitySingleProduct(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };


   
   const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
   };

 

 const totalQuantitySingleProduct = (item, cantidad) => {
    const carritoActualizado = cart.map((prod) => {
        if (prod.id === item.id) {
            const productUpdated = {
                ...prod, 
                cantidad: cantidad,
            };
            return productUpdated;
        } else {
            return prod;
        }
    });
     setCart(carritoActualizado);
 };




const eliminarProd = (id) => {
    console.log(`eliminando producto ${id}`);
    const carritoFiltrado = cart.filter((prod) => prod.id !== id);
    setCart(carritoFiltrado);
};


 
 const clearCart = () => {
    setCart([]);
};




const totalQuantity = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
        acumulador += prod.cantidad;
    });
    return acumulador
};





const totalPrice = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
        acumulador += prod.cantidad * prod.price;
    });
    return acumulador
}



const getProductQuantity = (id) => {
    const product = cart.find((prod)=> prod.id === id);
    return product?.cantidad;
}




console.log(cart);



    return (
        <CartContext.Provider value={{ 
            cart,
            addToCart,
            clearCart,
            eliminarProd,
            totalPrice,
            totalQuantity,
            getProductQuantity 
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
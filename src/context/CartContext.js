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


   // corroborando si el servicio ya está en el carrito
   const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
   };

  // sumando la cantidad del mismo servicio
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



//calcular total de unicades para el cart widget
const totalQuantity = () => {
    let acumulador = 0;
    cart.forEach((prod) => {
        acumulador += prod.cantidad;
    });
    return acumulador
};




//calcular total precio del carrito
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
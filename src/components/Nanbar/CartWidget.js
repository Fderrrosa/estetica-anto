import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)



    return (
        <div>
            <span className="material-icons">shopping_cart</span>
            <span>{totalQuantity() === 0 ? "" : totalQuantity()}</span>
       </div>
    )
};

export default CartWidget

               



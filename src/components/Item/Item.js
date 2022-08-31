import React from 'react';
import { products } from '../mock/products';
import { ItemList } from '../ItemList/ItemList';


export const Item = () => {
    return (
         <div>
            <h4 id={products.title}>Hols</h4>
            <div>
                <img src={products.img} alt="" />
            </div>
            <p>{products.price} $</p>
            <p>Stock: {products.stock}</p>
            
        </div>
    )
}








/*const Item = ({products}) => {
    return (
        <div>
            <h4>{title}</h4>
            <div>
                <img src={img} alt="" />
            </div>
            <p>{price} $</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default */
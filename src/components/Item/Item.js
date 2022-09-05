import React from 'react';
import Counter from '../Counter/Counter';
import './item.css';
//import { products } from '../mock/products';




const Item = ( {id, title, price, category, img, stock}) => {
    return (
         <div className='products'>
            <h4> {title}</h4>
            <div >
                <img src={img} className="img." alt="" />
            </div>
            <p>{price} $</p>
            <p>Stock: {stock} </p>
            <Counter stock={3} />
        </div>
        
    )
}



export default Item






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
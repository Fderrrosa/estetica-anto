import React from 'react';
import Counter from '../Counter/Counter';
import './item.css';
//import { products } from '../mock/products';




const Item = ( {id, title, price, category, img, stock}) => {
    return (
         <div className='products'>
                   <img src={img} className="imgx" alt="" />
                   <div className='datos'>
            <h4> {title}</h4>
            <h3> Categoria: {category} </h3>

            <p> Stock: {stock} </p>
            <Counter stock={stock}/>
            
           
            <p> Precio: ${price} </p>
            <button>Ver mas</button>
            </div>
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
*/
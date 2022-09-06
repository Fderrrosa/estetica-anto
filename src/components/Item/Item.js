import React from 'react';
//import Counter from '../Counter/Counter';
import './item.css';
import { Link } from 'react-router-dom';
//import ItemList from '../ItemList/ItemList';
//import { products } from '../mock/products';

//id, title, price, category, img

const Item = ( { item }) => {
    return (
         <div className='products'>
                   <img src={item.img} className="imgx" alt="" />
            <div className='datos'>
                  <h4> {item.title}</h4>
                  <h3> Categoria: {item.category} </h3>
                   <p> Precio: ${item.price} </p>
                
               <Link to={`/detail/${item.id}`}>
                 <button>Ver mas</button>
                </Link > 
              
             
            </div> 
        </div>
        )}


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
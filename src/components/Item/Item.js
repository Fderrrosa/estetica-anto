import React from 'react';
import './item.css';
import { Link } from 'react-router-dom';






const Item = ( { item }) => {
    return (
         <div className='products'>
                   <img src={item.img} className="imgx" alt="" />
            <div className='datos'>
                  <h4> {item.title}</h4>
                  <h3> Categoria: {item.category} </h3>
                   <p> Precio: ${item.price} </p>

             
               <Link to={`/detail/${item.id}`}>
                 <button className='bot.prod'>Ver mas</button>
                </Link > 
                
              
             
            </div> 
        </div>
        )}


export default Item





//import Counter from '../Counter/Counter';
//import ItemList from '../ItemList/ItemList';
//import { products } from '../mock/products';
//id, title, price, category, img


//import Counter from '../Counter/Counter';
//import ItemList from '../ItemList/ItemList';
//import { products } from '../mock/products';
//id, title, price, category, img


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
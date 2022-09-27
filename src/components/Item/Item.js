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
        )};


export default Item












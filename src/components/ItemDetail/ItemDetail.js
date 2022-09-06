import React from 'react'
import Counter from '../Counter/Counter';
//import './itemdetail.css';
import '../Item/item.css';




const ItemDetail = ({ item }) => {
  return (
    <div className='products'>
        <img  src={item.img} alt={item.title} />
        <div className='datos'>
        <h4 className='infodata' >{item.title} </h4>
        <p className='infodata'> Precio: {item.price} </p>
        <p className='infodata'>Categoria: {item.category} </p>
        <Counter />
        </div>
        
    </div>
  )
}

export default ItemDetail
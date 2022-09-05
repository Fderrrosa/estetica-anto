import React from 'react'
import './itemdetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className='infoimg'>
        <img  src={item.img} alt={item.title} />
        <div>
        <h1    className='infodata' >{item.title} </h1>
        <p className='infodata'> Precio: {item.price} </p>
        <p className='infodata'>Categoria: {item.category} </p>
      
        </div>
    </div>
  )
}

export default ItemDetail
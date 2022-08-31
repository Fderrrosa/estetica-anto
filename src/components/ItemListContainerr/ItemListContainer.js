import React, { useState, useEffect } from 'react'
import './itemlistcontainer.css'
import { products } from '../mock/products'
import { ItemList } from '../ItemList/ItemList';




const ItemListContainer = ({ saludo }) => {
    const [Items, setItems] = useState([])

    const getProducts = () => new Promise ((resolve, reject) => {
        setTimeout(() => resolve(products), 2000)
    })
    useEffect(() => {
        getProducts()
        .then(products => setItems(products))
        .catch(error => console.log(error))
    }, [])

    return (
        <ItemList Items={Items}/>
    )


}



export default ItemListContainer;























/*
const ItemListContainer = ({ saludo }) => {

    const [items, setItems] = useState([]);
      

    useEffect(() => {
      const getProducts = new Promise((res, rej) => {
          setTimeout(() => { res(products); }, 2000);});

      getProducts
          .then((data) => {
              setItems(data);
          })
          .catch((error) => {
              //console.log(error);
          })
          .finally(() => {
              //console.log('Finally');
          });
  }, []);






  return (
   <>
        <h2 className='ILC-title'>{'¡Que tal gente!'}</h2>
        <p>Vamos a hacerle una mini introduccion de ¿quienes somos?                          
        Somos una estetica la cual se basa en la belleza, cosmetica y cuidado personal.
        </p>
        <ItemList items={items}/>

    </>
        
);
};

     */


export default ItemListContainer
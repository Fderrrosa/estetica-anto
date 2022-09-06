import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemlistcontainer.css';
import { products } from '../mock/products';
import ItemList from '../ItemList/ItemList';
//import Counter from '../Counter/Counter';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);



    const { categoryName } = useParams();

    useEffect(() => {
        const getProducts = () =>
        new Promise ((res, rej) => {
            const prodFiltrados = products.filter((prod) => prod.category === categoryName);
            setTimeout(() => {
                res(categoryName ? prodFiltrados : products);
            }, 500);
        });
        getProducts()
        .then((data) =>{
            setItems(data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [categoryName]);
    



   




    return (
        <>
        {items.length > 0 && <ItemList items={items}/>}
        </>

    )

}

export default ItemListContainer




















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


//export default ItemListContainer
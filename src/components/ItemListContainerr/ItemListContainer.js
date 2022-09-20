import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
//import Counter from '../Counter/Counter';
//import { products } from '../mock/products';

import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';


const ItemListContainer = (   ) => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();


    useEffect(() => {
        const itemCollection = collection(db, 'productos');

       const referencia = categoryName
        ? query(itemCollection, where('category', '==', categoryName))
        : itemCollection;
        

        getDocs(referencia)
         .then((res) => {
            const products = res.docs.map((prod) => {
                return {
                    id: prod.id,
                    ...prod.data(),
                };
            });
            setItems(products);
         })
         .catch((error) => {
            console.log(error);
        })
    }, [categoryName]);
    



   




    return (
        <>
        {items.length > 0 && <ItemList items={items}/>}
        </>

    )

}

export default ItemListContainer










/*const getProducts = () =>
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
*/






























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
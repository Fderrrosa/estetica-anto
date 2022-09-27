import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
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













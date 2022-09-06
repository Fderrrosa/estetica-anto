import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../mock/products";
import { useParams } from "react-router-dom";
//import Item from "../Item/Item";




const ItemDetailContainer = () =>{
    const [item, setItem] = useState([])


const { id } = useParams();

    useEffect(()=>{
        const getProduct = () => new Promise((res, rej )=> {

          const oneProduct = products.find((prod)=> prod.id === id)
               setTimeout(()=>{res(id ? oneProduct : products)}, 1000)
        })
        getProduct()
        .then((info)=>{
            setItem(info);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [id]);
    

    return(
    <div>
        <ItemDetail item={item}/>
        </div>
    )
}
    export default ItemDetailContainer

    // <ItemDetail item={item}/>
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { products } from "../mock/products";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})


const { idProd } = useParams();

    useEffect(()=>{
        const getProduct = () => new Promise((res, rej )=> {

          const oneProduct = products.find((prod)=> prod.id === idProd)
               setTimeout(()=>{res(idProd ? oneProduct : products)}, 1000)
        })
        getProduct()
        .then((info)=>{
            setItem(info);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, [idProd]);
    

    return(
        <ItemDetail item={item}/>
    )
}
    export default ItemDetailContainer
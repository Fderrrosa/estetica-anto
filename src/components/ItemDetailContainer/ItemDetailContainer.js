import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { products } from "../mock/products"


const ItemDetailContainer = () =>{
    const [item, setItem] = useState({})

    useEffect(()=>{
        const getProduct = () => new Promise((res,rej)=> {

          const oneProduct = products.find((producto)=> producto.id === 1)
 
            setTimeout(()=>{
                res(oneProduct)}, 2000)
        })
        getProduct()
        .then((info)=>{
            setItem(info);
        })
        .catch((error)=>{
            console.log(error);
        });




    }, [])
    
    


    return(
        <ItemDetail item={item}/>
    )


}

    export default ItemDetailContainer
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from "firebase/firestore";

//import { products } from "../mock/products";

const ItemDetailContainer = () =>{

    
    const [item, setItem] = useState({})


const { id } = useParams();

    useEffect(()=>{
      const itemCollection = collection(db, 'productos');
      const ref = doc(itemCollection, id);
      getDoc(ref).then((res) => {
        setItem({ id: res.id, ...res.data() });
      });
    }, [id]);
    

    return(
    <div>
        <ItemDetail item={item} />
        
        </div>
    )
}
    export default ItemDetailContainer 








/*const getProduct = () => new Promise((res, rej )=> {

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
*/        















//import Item from "../Item/Item";
// <ItemDetail item={item}/>
import React from "react"
import Item from "../Item/Item";


const ItemList = ({items}) => {
   return ( 
    <>
    {items.map(prod => <Item key={prod.id}  title={prod.title} price={prod.price}  stock= {prod.stock} category={prod.category} img={prod.img} />)}
    </>
    
    )
}

export default ItemList









/*const ItemList = ({items}) => {
    console.log(items);
    return (
        <>
        { 
        items.map(item => <Item key={item.id} />
        )}
        </>

    )



};*/

//export default ItemList

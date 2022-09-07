import React from "react"
import Item from "../Item/Item";


const ItemList = ({items}) => {
   return ( 
    <div>
    {items.map((item) => {
        return <Item key={item.id} item={item} />;
    })}
    
    </div>
    );
};
    
    
    


export default ItemList









//id={prod.id} title={prod.title} price={prod.price}  stock= {prod.stock} category={prod.category} img={prod.img}
// {items.map(prod => <Item key={prod.id}  {...prod}  />)}
/*const ItemList = ({items}) => {
    console.log(items);
    return (
        <>
        { 
        items.map(item => <Item key={item.id} />
        )}
        </>
)};*/
//export default ItemList

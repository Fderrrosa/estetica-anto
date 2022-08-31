import React from 'react'
import { Item } from '../Item/Item';


export const ItemList = ({Items}) => {
    console.log('hola funciono')

    return (
        <Items key={Items.id} item={title} item1={price} item2={category} item3={img} />
        //<div>{Items.map(item => <Item key={Items.id} img={Items.img} title={Items.title} stock={Items.stock} price={Items.price} />)}</div>
    )
}









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

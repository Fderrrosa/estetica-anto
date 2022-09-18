import React, { useContext, useState } from 'react'
import '../Item/item.css';
import Counter from '../Counter/Counter';
import {Link} from 'react-router-dom';
import '../Counter/counter.css';
import { CartContext } from '../../context/CartContext';


const ItemDetail = ({ item }) => {
  const [add, setAdd] = useState(false);
  //const { addToCart } = useContext(CartContext);

const {addToCart, getProductQuantity} = useContext(CartContext);

const [cantidad, setCantidad] = useState(0);




  const onAdd = (cantidad) => {
    setCantidad(cantidad);
    setAdd(!add);
    addToCart(item, cantidad);
    //console.log(item, cantidad);
    //console.log(cantidad);
  };


  const quantity = getProductQuantity(item.id);

  



  return (
    <div className='products'>
        <img  src={item.img} alt={item.title} />
        <div className='datos'>
        <h4 className='infodata' >{item.title} </h4>
        <p className='infodata'> Precio: {item.price} </p>
        <p className='infodata'>Categoria: {item.category} </p>


 {cantidad === 0 ? (
      <Counter
        stock={item.stock}
        inicial={quantity}
        onAdd={onAdd}
      />
) : (
       <Link to="/cart">Ir al carrito</Link>
)};


</div>
</div>
  
  )};

export default ItemDetail


/*{
       
       add ? <div style={{border: '1px solid #000', margin: '4px 2px'}}>Añadido</div> : <Counter  stock={3} inicial={quantity} onAdd={onAdd}/>
}

<Link to="/cart" >
   <button className='ST-' style={{display: 'flex'}}>  Finalizar </button> 
</Link>

*/









/*   <Counter  stock={3} inicial={0} onAdd={onAdd}/>
 const onAdd = (param) => {
    console.log(param);
  }; 
  
  
  
  
  */
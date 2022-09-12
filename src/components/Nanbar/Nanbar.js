import React from 'react'
import './nanbar.css'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';




const Nanbar = () => {
  return (
    
   
    <nav className='nav-nav'>

      <Link to="/">Inicio</Link>
    <ul className='list'>
      <Link to="/category/depilacion">Depilacion</Link>

      <Link to="/category/face">Face</Link>

      <Link to="/category/body">Body</Link>
       
    </ul>


    <Link to="/cart">
      <CartWidget />
    </Link>


    
  
</nav>

  )
}

export default Nanbar
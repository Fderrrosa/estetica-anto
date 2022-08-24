import React from 'react'
import './nanbar.css'
import CartWidget from './CartWidget'

const Nanbar = () => {
  return (
    <nav className='nav-nav'>
    <ul className='list'>
        <li>
        <a href="https://www.instagram.com/_antonellaesteticaydepi/?igshid=YmMyMTA2M2Y%3D">Productos </a>
        </li>
        <li>
        <a href="https://www.instagram.com/_antonellaesteticaydepi/?igshid=YmMyMTA2M2Y%3D">Nosotros </a>
        </li>
        <li>
        <a href="https://www.instagram.com/_antonellaesteticaydepi/?igshid=YmMyMTA2M2Y%3D">Contacto</a>
        </li>
    </ul>
    <CartWidget/>
</nav>
  )
}

export default Nanbar
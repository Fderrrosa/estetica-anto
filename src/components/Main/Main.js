import React from 'react';
import './main.css';

const Main = (props) => {
  //console.log(props);
  console.log(props.test);
  return (
    <main className='contenedor-main'>
        <section>
            <h2>Bienvenidos a mi tienda de Antonella Estética!</h2>
        </section>
    </main>
  )
}

export default Main
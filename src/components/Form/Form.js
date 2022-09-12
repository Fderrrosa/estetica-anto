import React, {  useState } from 'react'


const Form = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');



const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nombre, apellido, fecha);
};



const handleNameInput = (event) => {
    setNombre(event.target.value);
};


const handleChangeApellido = (event) => {
    setApellido(event.target.value);
};

const handleChangeFecha = (e) => {
    setFecha(e.target.value);
};

const handleChangeHora = (e) => {
  setHora(e.target.value);
};






  return (
    <div style={{ marginTop: '20px' }}>
        <form action="" onSubmit={handleSubmit}>
            <input 

              type="text"
              placeholder='Nombre...' 
              name='nombre' 
              value={nombre} 
              onChange={handleNameInput} 
              />


            <input 
            
              type="text" 
              placeholder='Apellido...' 
              name='apellido' 
              value={apellido} 
              onChange={handleChangeApellido} 
              /> 
              
              <select value={fecha} onChange={handleChangeFecha}>
                  <option value="01/09 a 10/09">De 01/09 a 10/09</option>
                  <option value="11/09 a 20/09">De 11/09 a 20/09</option>
                  <option value="21/09 a 30/09">De 21/09 a 30/09</option>
              </select>

             
              <select value={hora} onChange={handleChangeHora}>
                 <option value="08 a 13hs"> HORARIO MATUTINO -Turno mañana entre horarios de 08 a 13hs </option>
                 <option value="13 a 19hs"> HORARIO VESPERTINO - Turno tarde entre horarios de 13 a 19hs </option>
              </select>



            <button>Enviar</button>
        </form>
    </div>
  )
}

export default Form
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import CanalesFind from '../Canales/CanalesFind';
import './NewEspacioStyle.css';

const NewEspacio = () => {
  const [newWorkspace, setNewWorkspace] = useState([]);
  const [showInput, setShowInput] = useState(false);
  useEffect(() => {
    const savedWorkspaces = JSON.parse(localStorage.getItem('newWorkspace')) || [];
    setNewWorkspace(savedWorkspaces);
  }, []);

  // 2. Guardar datos en localStorage cuando cambie newWorkspace
  useEffect(() => {
    localStorage.setItem('newWorkspace', JSON.stringify(newWorkspace));
  }, [newWorkspace]);
  const HandelShowInput = () => {
    setShowInput((prevshowInput) => !prevshowInput);
  };

  const HandelSubmitForm = (e) => {
    e.preventDefault();
    const canalJSX = e.target;
    const nombreCanal = canalJSX.texto.value;

    const newCanal = {
      id: newWorkspace.length + 1, 
      title: nombreCanal,
      miembros: [],
      mensajes: [
        {
          nombre: 'Admin',
          img: '',
          hora: '11:00',
          mensaje: 'Bienvenido al nuevo canal',
          id: 1,
        },
      ],
    };

    setNewWorkspace([...newWorkspace, newCanal]);
    canalJSX.reset(); 
  };

  return (
    <div>
      <div>
        
        {newWorkspace.map((canals) => (
          <div key={canals.id}  className='contenedorCanal'>
            {/* Link para cambiar la URL al canal seleccionado */}
            <Link to={`/canales/${canals.id}/`}>
              <span className='nuevoCanal'>{'#'+canals.title}</span>
            </Link>
          </div>
        ))}
        <div className='contenedorCrearCanal'>
        <form onSubmit={HandelSubmitForm}>
        <label htmlFor="texto"></label>
        {showInput && (<input className='inputCanal' type="text" id="texto" name="texto" placeholder="Nombre del canal" />)}
      </form>
        <button className='botonCrear' onClick={HandelShowInput} type="submit">
        {showInput ? <span className='cerrar'>Cerrar </span>: <span className='crear'> + Crear canal</span> }
      </button>
        </div>
        
      </div>
      
    </div>
  );
};

export default NewEspacio;

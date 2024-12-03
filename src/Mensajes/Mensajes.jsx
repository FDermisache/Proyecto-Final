import React, { useState } from 'react';
import './mensajesStyle.css';

const Mensajes = () => {
    const [mensajes, setMensajes] = useState([]);
    const HandleSubtmit = (evento) => {
        evento.preventDefault();
        const mensajesJSX = evento.target;
        const NewMessages = {
            mensaje: mensajesJSX.text.value,
            hora: new Date().toLocaleTimeString(),
            img: '',
        };
        setMensajes([...mensajes, NewMessages]);
        mensajesJSX.reset();
    };

    return (
        <div>
            <div>
                <MsmMap msm={mensajes} />
            </div>
        <div className='ContenedorMensajes'>
            <div className='contenedorIconosTop'>
                <span className='iconosTop'><i class="bi bi-type-bold" title='Negrita'></i></span>
                <span className='iconosTop'><i class="bi bi-type-italic" title='Cursiva'></i></span>
                <span className='iconosTop'><i class="bi bi-type-strikethrough" title='Tachado'></i></span>
                <span className='iconosTop'><i class="bi bi-link-45deg" title='Enlace'></i></span>
                <span className='iconosTop'><i class="bi bi-list-ol" title='Lista ordenada'></i></span>
                <span className='iconosTop'><i class="bi bi-list-ul" title='Lista con viñetas'></i></span>
                <span className='iconosTop'><i class="bi bi-list" title='Cita en bloque'></i></span>
                <span className='iconosTop'><i class="bi bi-code-slash" title='Codigo'></i></span>
                <span className='iconosTop'><i class="bi bi-code-square" title='Bloque de codigo'></i></span>
            </div>
            <form className='FormMensajes' onSubmit={HandleSubtmit}>
                <label htmlFor="mensaje"></label>
                <input
                    className='inputMensajes'
                    type="text"
                    id='text'
                    name='text'
                    placeholder='Ingrese un mensaje'
                />
            </form>
            <div className='contenedorIconosBottom'>
                <span className='iconosBottom'><i class="bi bi-plus-lg" title='Adjuntar'></i></span>
                <span className='iconosBottom'><i class="bi bi-type" title='Ocultar Formato'></i></span>
                <span className='iconosBottom'><i class="bi bi-emoji-smile" title='Emoji'></i></span>
                <span className='iconosBottom'><i class="bi bi-at" title='Mencionar a alguien'></i></span>
                <span className='iconosBottom'><i class="bi bi-camera-video" title='Grabar clip de video'></i></span>
                <span className='iconosBottom'><i class="bi bi-mic" title='Grabar clip de audio'></i></span>
                <span className='iconosBottom'><i class="bi bi-vr" title='Ejecutar acceso directo'></i></span>
            </div>
        </div>
        </div>
    );
};

const MsmMap = ({ msm }) => {
    return (
        <div>
            {msm.map((ms) => {
                return (
                    <MsmNuevo
                        mensaje={ms.mensaje}
                        hora={ms.hora}
                        imagen={ms.img}
                    />
                );
            })}
        </div>
    );
};

const MsmNuevo = ({ mensaje, hora, img }) => {
    return (
        <div className='contenedorMensajePersonalizado'>
            <div className='contenedorUsu'>
            <span className='imgUsu'><img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="Imagen Usuario" /> </span><span className='nombreUsuario'>Federico Dermisache</span>
            <span className='horaMensaje'>{hora}</span>
            
            </div>
            
            <div className='contMensaje'>
            <p className='textMensaje'>{mensaje}</p>
            </div>
            
        </div>
    );
};

export default Mensajes;

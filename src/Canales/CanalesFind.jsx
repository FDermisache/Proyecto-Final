import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import canales from "./CanalesData";
import "./canalesStyles.css";
import Mensajes from "../Mensajes/Mensajes";
import NewEspacio from "../Espacios/NewEspacio";
import { use } from "react";
import "../Mensajes/mensajesStyle.css";

const CanalesFind = () => {
  const { canal_id, titulo } =
    useParams(); /* Agregamos el titulo para desps en las rutas poder acceder a ellos */
  const canal = canales.find((c) => c.id === Number(canal_id));
  const navigate = useNavigate();
  useEffect(() => {
    if (!titulo) {
      navigate(`/canales/${canal_id}/general`);
    }
  }, []);

  // Filtramos el chat según el título seleccionado
  const chatSeleccionado = canal.mensajes.find(
    (chat) => chat.titulo === `#${titulo}`
  ); /* Esto selecciona únicamente el chat cuyo título coincide con #general, #trabajo, o cualquier otro título recibido en la URL */

  return (
    <div className="contenedorGeneral">
      <div className="contenedorHeader">
        <header>
          <div className="Iconos">
            <span className="iconos1">
              <i class="bi bi-arrow-left"></i>
            </span>
            <span className="iconos1">
              <i class="bi bi-arrow-right"></i>
            </span>
            <span className="iconos1_1">
              <i class="bi bi-stopwatch"></i>
            </span>
          </div>
          <div className="contenedorBuscar">
            <label htmlFor="buscar">
              {" "}
              <i class="bi bi-search"></i>
            </label>
            <input
              className="input_canales"
              type="text"
              id="buscar"
              name="buscar"
              placeholder="Buscar en"
            />
          </div>
          <div className="contenedorAyuda">
            <i class="bi bi-question-circle"></i>
          </div>
        </header>
      </div>
      <div className="contenedorCanales">
        <div className="contenedorListaCanales">
          <div className="contenedorTitulo">
            <h1 className="tituloDelCanal">{canal.nombre}</h1>
          </div>
          <div className="prueba">
            <span className="subtitulo">
              {" "}
              <i class="bi bi-caret-down-fill"></i>Canales
            </span>

            {/* Mostrar títulos como enlaces */}
            {canal.mensajes.map((chat) => (
              <Link
                key={chat.id}
                to={`/canales/${canal_id}/${chat.titulo.substring(1)}/`}
              >
                {" "}
                {/* Esto permite que cada título (#general, #utilidades, etc.) sea un enlace que lleve al usuario a una ruta específica, */}
                <div className="contenedorTituloCanal">
                  <h3 className="tituloCanal">{chat.titulo}</h3>
                </div>
              </Link>
            ))}
            <div>
              <NewEspacio />
            </div>
          </div>
        </div>
        <div className="contenedorChat">
          <div className="contenedorMensajes">
            <div>
              <h1>{chatSeleccionado.titulo}</h1>
            </div>
            {/* Mostrar mensajes del título seleccionado */}
            {chatSeleccionado ? (
              <CanalLista mensajes={chatSeleccionado.mensajes} />
            ) : (
              ""
            )}
            <div className="contenedorMSM">
            <Mensajes />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const CanalLista = ({ mensajes }) => {
  return (
    <div>
      {mensajes.map((mensaje) => (
        <MensajeCanal
          key={mensaje.id}
          nombre={mensaje.nombre}
          img={mensaje.img}
          hora={mensaje.hora}
          mensaje={mensaje.mensaje}
        />
      ))}
    </div>
  );
};

const MensajeCanal = ({ nombre, img, hora, mensaje }) => {
  return (
    <div>
      <div className="contenedorMensajePersonalizado">
        <div className="contenedorUsu">
          <span className="imgUsu">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="Imagen Usuario"
            />{" "}
          </span>
          <span className="nombreUsuario">{nombre}</span>
          <span className="horaMensaje">{hora}</span>
        </div>
        <div className="contMensaje">
          <p className="textMensaje">{mensaje}</p>
        </div>
      </div>
    </div>
  );
};

export default CanalesFind;

import React, { useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import canales from "./CanalesData";
import "./canalesStyles.css";
import Mensajes from "../Mensajes/Mensajes";
import NewEspacio from "../Espacios/NewEspacio";

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
          <span>
            <i class="bi bi-arrow-left"></i>
          </span>
          <span>
            <i class="bi bi-arrow-right"></i>
          </span>
          <label htmlFor="buscar">
            {" "}
            <i class="bi bi-search"></i>
          </label>
          <input
            type="text"
            id="buscar"
            name="buscar"
            placeholder="Buscar en"
          />
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
                to={`/canales/${canal_id}/${chat.titulo.substring(1)}`}
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
            {/* Mostrar mensajes del título seleccionado */}
            {chatSeleccionado /* Añadí una verificación para renderizar los mensajes del título seleccionado. Si no hay un título (por ejemplo, cuando estás en /canales/1), muestra un mensaje genérico:  */ ? (
              <CanalLista mensajes={chatSeleccionado.mensajes} />
            ) : (
              ""
            )}
            <Mensajes />
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
      <h4>{nombre}</h4>
      <span>{hora}</span>
      <p>{mensaje}</p>
    </div>
  );
};

export default CanalesFind;

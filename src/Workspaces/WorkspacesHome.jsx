import React, { useState, useContext } from "react";
import WorkspacesList from "./WorkspacesList";
import "./stylesWorkspaces.css";
import { WorkspacesContext } from "../Contextos/contextos";

const WorkspacesHome = () => {
  const { workspaces, createWorkspace } = useContext(WorkspacesContext); // Consumir contexto
  const [showForm, setShowForm] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");

  // Envío del formulario
  const handleAddWorkspace = (e) => {
    e.preventDefault();
    createWorkspace(newWorkspaceName); // Llamar a la función del contexto
    setNewWorkspaceName(""); // Limpiar el input
    setShowForm(false); // Cerrar el formulario
  };

  return (
    <div className="ContenedorPadre">
      {/* Botón para abrir el formulario */}
      <header className="header">
        <div className="ContenedorImagenSlack">
          <img
            className="imgSlack"
            src="https://a.slack-edge.com/3d92b39/marketing/img/nav/slack-salesforce-logo-nav-white.png"
            alt="Imagen Slack"
          />
        </div>
        <div className="ContenedorNav">
          <nav>
            <span className="NavBar">
              Funciones <i className="bi bi-chevron-compact-down"></i>
            </span>
            <span className="NavBar">
              Soluciones <i className="bi bi-chevron-compact-down"></i>
            </span>
            <span className="NavBar">Empresa</span>
            <span className="NavBar">
              Recursos <i className="bi bi-chevron-compact-down"></i>
            </span>
            <span className="NavBar">Precios</span>
          </nav>
        </div>
        <div className="ContenedorBotonVentas">
          <button className="botonVentas">HABLAR CON VENTAS</button>
        </div>
        <div className="ContenedorCrearEspacio">
          <button className="boton" onClick={() => setShowForm(!showForm)}>
            {showForm ? (
              ""
            ) : (
              <span className="botonNew">
                CREAR UN NUEVO ESPACIO DE TRABAJO
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Mostrar formulario si showForm es true */}
      <div className={showForm ? "form-visible" : "form-hidden"}>
        {showForm && (
          <div>
            <h2 className="TituloForm">Crea un nuevo entorno de trabajo</h2>
            <div className="ContenedorNuevoEspacio">
              <form onSubmit={handleAddWorkspace}>
                <label>
                  <div className="ContenedorEspacio">
                    <span className="TextEspacio">Nombre del Espacio: </span>
                  </div>
                  <div className="ContenedorInput">
                    <input
                      className="inputForm"
                      type="text"
                      value={newWorkspaceName}
                      onChange={(e) => setNewWorkspaceName(e.target.value)}
                      placeholder="Ingresa el nombre del nuevo espacio"
                    />
                  </div>
                </label>
                <div className="ContenedorBotonAgregar">
                  <button className="botonAgregar">Agregar</button>
                  <button
                    className="botonCancelar"
                    type="button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <WorkspacesList workspaces={workspaces} />
    </div>
  );
};

export default WorkspacesHome;

import React from 'react'
import { Link } from 'react-router-dom'
import './stylesWorkspaces.css'

const WorkspacesItem = ({title,miembros,id}) => {
  return (
    <div className='ContenedorPrincipalItem'>
      <div className='ContenedorWorkspaceItem'>
        <div className='avatarWork'>
          <img  className='avatar' src='/avatar_slack.png' alt="avatar workspaces" />
        </div>
        <div className='ContenedorTituloWorkspace'>
        <h2 className='tituloWorkspace'>{title}</h2>
        <div>
        <span className='miembros'>{miembros} miembros</span>
        </div>
        </div>
          <div className='contenedorBoton'>
          <button className='botonIniciar'>
            <Link to={`/canales/${id}/general`}>
          <span className='iniciar'>Iniciar Slack</span></Link>
          </button>
          
          </div>
      </div>
    </div>
  )
}


export default WorkspacesItem
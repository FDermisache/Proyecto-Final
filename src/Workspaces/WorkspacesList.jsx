import React from 'react'
import WorkspacesItem from './WorkspacesItem'
import './stylesWorkspaces.css'

const WorkspacesList = ({workspaces}) => {
    let workspacesListJSX = workspaces.map(
        ( workspace )=>{
            return <WorkspacesItem 
                title={workspace.title} 
                id={workspace.id} 
                miembros={workspace.miembros.length} 
                img={workspace.img}
                key={workspace.id} 
            />
        }
    )
    return (
        <div className='ContenedorForm'>
            <div className='title'>
            <div className='ContenedorImagenMano'>
            <img  className='imgSaludo' src="https://a.slack-edge.com/6c404/marketing/img/homepage/bold-existing-users/waving-hand.gif" alt="mano saludando" />
            </div>
            <h1>¡Hola de nuevo!</h1>
            </div>
            <div className='ContMailUsu'>
                <span className='TextMail'>Espacio de trabajo para usuario@gmail.com</span>
            </div>
            <div>
                {workspacesListJSX}
            </div>
            <div className='ContenedorVerMas'>
                <span className='Vermas'>Ver mas <i class="bi bi-chevron-compact-down"></i> </span>
            </div>
            <div className='ContenedorSpan'>
                <span className='TextSpan'>¿No encuentras tu espacio de trabajo? <span className='TextSpanEspecial'>Prueba con otro correo electrónico <i class="bi bi-arrow-right"></i> </span></span>
            </div>
        </div>

    )
}

export default WorkspacesList
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WorkspacesHome from './Workspaces/WorkspacesHome';
import CanalesFind from './Canales/CanalesFind';
import CanalesRender from './Canales/CanalesRender';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<WorkspacesHome />} />
                {/* 
                - canales:Nombre que le damos nosotros para que contenga otras rutas
                - canal_id: Parametro Dinamico,lo definimos en App.jsx y lo capturamos en CanalesFind.jsx con {canal_id} useParams, En este caso, representa el ID del canal seleccionado (por ejemplo, 1, 2, 3), y proviene del  dataset de CanalesData.
                - titulo: igual al anterior, lo definimos en app, lo llamamos en CanlesFind {titulo}, representa a cada titulo declarado en CanalesData
                  */}
                <Route path="/canales/:canal_id/:titulo" element={<CanalesFind />} /> 
                <Route path="/canales/:canal_id" element={<CanalesFind />} />
                
            </Routes>
        </div>
    );
}

export default App;

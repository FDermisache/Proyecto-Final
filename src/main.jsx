import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { WorkspacesProvider } from './Contextos/contextos.jsx'



createRoot(document.getElementById('root')).render(
    <WorkspacesProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </WorkspacesProvider>
    
)

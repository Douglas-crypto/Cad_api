import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home' 
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Home/> 
  </StrictMode>,
)



//~/Visual Studio/CADASTRO-DE-USUARIOS/devclub-cadastro-usuarios$ para rodar npm run dev
//~/Visual Studio/Cad_api$ para rodar node server.js
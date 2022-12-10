import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/*
  Importar BrowserRouter, que dota a mi App de poder manejar rutas.
  Debe estar en un componente superior, para que este disponible a toda su descendencia
*/
import { BrowserRouter } from 'react-router-dom'

// Styles
import './index.css'

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <StrictMode>
    {/* Hago que REact Router este disponible en toda mi app */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

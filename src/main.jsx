import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './SunshineLibrary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
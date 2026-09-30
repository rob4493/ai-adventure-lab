import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AccountApp from './account/AccountApp.jsx'
import { registerServiceWorker } from './registerServiceWorker.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AccountApp />
  </StrictMode>,
)

registerServiceWorker()

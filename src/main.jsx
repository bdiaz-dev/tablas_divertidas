import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SelectedTablesProvider } from './context/selectedTablesContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SelectedTablesProvider>
      <App />
    </SelectedTablesProvider>
  </StrictMode>
)

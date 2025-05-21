import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from "./components/login/login.tsx"
import "./global.css"


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.tsx'
import Info from './components/info-section/info-section.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Info />
  </StrictMode>,
)

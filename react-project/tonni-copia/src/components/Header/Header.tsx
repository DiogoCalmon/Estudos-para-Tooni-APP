import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function header(){
  const idDoBotao: string = 'butao-para-mudar-pagina'
  const navigate = useNavigate()

  function telaDePagamento(){
    navigate("/payment")
  }

  return (
    <>
      <header>
        <div className="logo">
          <div className="tooni">
            <h2>Tooni</h2>
          </div>
          <div className="app">
            <p>App</p>
          </div>
        </div>
        <div className="links">
          <a href="">Recursos</a>
          <a href="">Comparativo</a>
          <a href="">Preços</a>
        </div>
        <button id={idDoBotao} onClick={telaDePagamento} type="button">Adquirir Agora</button>
        
      </header>
    </>
    
  )
}
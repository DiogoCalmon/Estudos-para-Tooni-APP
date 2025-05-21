import './Header.css'

export default function header(){
  return (
    <>
      <header>
        <div className="logo">
          <div className="tooni">Tonni</div>
          <div className="app">App</div>
        </div>
        <div className="links">
          <a href="">Recursos</a>
          <a href="">Comparativo</a>
          <a href="">Preços</a>
        </div>
        <div className="botao">
          <button type="button">Adquirir agora</button>
        </div>
      </header>
    </>
    
  )
}
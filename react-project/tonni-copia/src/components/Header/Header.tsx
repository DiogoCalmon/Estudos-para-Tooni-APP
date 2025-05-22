import './Header.css'

export default function header(){
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
        <button type="button">Adquirir agora</button>
        
      </header>
    </>
    
  )
}
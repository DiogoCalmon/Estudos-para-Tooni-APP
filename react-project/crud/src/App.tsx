import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-zinc-500 w-2xl">
        <h2>Gerenciador de Tarefas</h2>
        <div className="bg-zinc-900 flex flex-col items-center mb-6 p-6">
          
        </div>  
        <div className="bg-zinc-700">
          <nav className="teste">oi</nav>
        </div>
      </div>
    </>
  )
}

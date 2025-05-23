import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>{"Numero: " + count}</div>
      <button type="button" onClick={() => {setCount(count + 1)}}>mudar mensagem</button>
    </>
  )
}

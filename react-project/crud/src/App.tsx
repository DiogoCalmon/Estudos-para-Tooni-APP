
import './App.css'
import Adicionar from "./components/adicionarMusica"
import Lista from "./components/listaDeMusicas"

export default function App() {
  type Musica = {
    id: number
    titulo: string
    autor: string
    estado: boolean
  }

  const musicas: Musica[] = [
    {
      id: 1,
      titulo: "No Face",
      autor: "Drake",
      estado: false
    },
    {
      id: 2,
      titulo: "Like That",
      autor: "Future",
      estado: false
    },
    {
      id: 3,
      titulo: "Num id Change",
      autor: "Yeat",
      estado: false
    },
  ]

  function adicionar(novaMusica: Musica){
    
  }

  adicionar(musicas[2])

  return (
    <>
      <Adicionar adicionar={"oi"}/>
      <Lista lista={musicas}/>
    </>
  )
}

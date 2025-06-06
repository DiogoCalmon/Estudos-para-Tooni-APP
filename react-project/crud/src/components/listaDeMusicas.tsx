import { Ellipsis, PlayIcon } from 'lucide-react'
import '../App.css'

type Musica = {
    id: string
    titulo: string
    autor: string
    estado: boolean
  }

type Musicas = {
    lista: Musica[]
}

export default function listaDeMusicas(props: Musicas){
  console.log(props)
    return (
        <div className="bg-zinc-700 p-3 mt-2">
          {
            props.lista.map((tarefa) => {
              return <nav key={tarefa.id} className="bg-zinc-900 my-2 p-1 flex flex-row justify-between" >
                <nav className="flex flex-row items-center">
                  <button className='ml-10 cursor-pointer' type="button"><PlayIcon /></button>
                  <h3 className='text-start ml-4' >{tarefa.titulo} - {tarefa.autor}</h3>
                </nav>
                <nav className="items-center-safe mr-4">
                  <button className='ml-10 cursor-pointer' type="button"><Ellipsis /></button>
                </nav>
              </nav>
            })
          }  
      </div>
    )
}
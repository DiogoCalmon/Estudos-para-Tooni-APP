import { useState } from 'react'
import './App.css'
import Tasks from './tasks.tsx'

export default function App() {
  
  const [tasks, setTasks] = useState([
  {
    id: 1,
    nome: "Estudar",
    detalhes: "Estudar typescript, React e NextJS",
    feito: false
  },
  {
    id: 2,
    nome: "Almoçar",
    detalhes: "Almoçar arroz, feijão, alface e frango",
    feito: false
  },
  {
    id: 3,
    nome: "Fazer compras",
    detalhes: "Fazer compras do que estiver na nota diária",
    feito: false
  },])

  function estadoDaTarefa(idItem: number){
    let novaLista = tasks.map(task => {
      if (task.id == idItem) {
        return {...task, feito: !task.feito}
      }
      return task
    })
    setTasks(novaLista)
  }

  console.log("olá")

  function deletarTarefa(idTarefa: number){
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === idTarefa ? { ...task, deletando: true } : task
      )
    );

    const animationDuration: number = 200

    setTimeout(() => {
      let novaLista = tasks.filter(task => task.id != idTarefa)
      setTasks(novaLista)
    }, animationDuration)
  }

  return (
    <>
    <div className="menu grid gap-2">
      <h2 className='text-2xl mb-1'>Gerenciador de Tarefas</h2>
      <div className="bg-zinc-300 text-gray-900 h-7.5 rounded mb-4 flex justify-center items-center">Adicionar tarefa</div>
      <Tasks tasks={tasks} estadoDaTarefa={estadoDaTarefa} deletarTarefa={deletarTarefa}/>
    </div>
    </>
  )
}

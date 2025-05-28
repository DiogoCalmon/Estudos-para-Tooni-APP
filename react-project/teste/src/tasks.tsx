import { ChevronRightIcon, Trash } from 'lucide-react'
import './App.css'

type Task = {
    id: number
    nome: string,
    detalhes: string,
    feito: boolean
    deletando?: boolean
}

type ListaDeTasks = {
    tasks: Task[]
    estadoDaTarefa: (id: number) => void
    deletarTarefa: (id: number) => void
}

export default function Tasks(props: ListaDeTasks){
    return (
        <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
            {props.tasks.map((task) => (
                <li key={task.id} className='flex space-x-3'>
                    <button
                    onClick={() => props.estadoDaTarefa(task.id)}
                    className={`text-gray-200 bg-zinc-800 w-50 p-2 rounded-2xl transition duration-180 ${task.feito && "opacity-60"} ${task.deletando ? "opacity-0 scale-50" : ""}`}
                    >
                        {task.nome}
                    </button>
                    <button id={`deletar-${task.id}`} onClick={() => props.deletarTarefa(task.id)} className="bg-zinc-600 p-1 rounded-md transition duration-150"><Trash /></button>
                    <button id={`detalhes-${task.id}`}type="button" className='bg-zinc-600 p-1 rounded-md cursor-pointer transition duration-150'><ChevronRightIcon /></button>
                </li>
            ))}
        </ul>
    )
}
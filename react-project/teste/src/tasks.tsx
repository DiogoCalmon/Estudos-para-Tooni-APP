import { ChevronRightIcon, ThermometerSnowflake, Trash } from 'lucide-react'
import './App.css'

type Task = {
    id: number
    nome: string,
    detalhes: string,
    feito: boolean
}

type ListaDeTasks = {
    tasks: Task[]
    estadoDaTarefa: (id: number) => void
}

export default function Tasks(props: ListaDeTasks){
    return (
        <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
            {props.tasks.map((task) => (
                <li key={task.id} className='flex space-x-3'>
                    <button
                    onClick={() => props.estadoDaTarefa(task.id)}
                    className={`text-gray-200 bg-zinc-800 w-50 p-2 rounded-2xl transition duration-200 ${task.feito && "opacity-60"}`}
                    >
                        {task.nome}
                    </button>
                    <button className='bg-zinc-600 p-1 rounded-md'><Trash /></button>
                    <button type="button" className='bg-zinc-600 p-1 rounded-md cursor-pointer'><ChevronRightIcon /></button>
                </li>
            ))}
        </ul>
    )
}
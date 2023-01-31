import { PlusCircle } from 'phosphor-react'
import './InputTasks.scss'

interface InputTasksProps {}

export const InputTasks = ({}: InputTasksProps) => {
  return (
    <form action="submit">
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  )
}

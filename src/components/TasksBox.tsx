import { ClipboardText } from 'phosphor-react'

import './TasksBox.scss'

interface TasksBoxProps {}

export const TasksBox = ({}: TasksBoxProps) => {
  return (
    <div className="tasks-box">
      <header className="tasks-infos">
        <div className='created-tasks'>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className='done-tasks'>
          <p>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <main className='tasks-content'>
        <ClipboardText size={56} className='clip-icon'/>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </main>
    </div>
  )
}

import { Tasks } from './Tasks'
import { v4 as uuid } from 'uuid'

import './TasksBox.scss'

interface TasksBoxProps {}

export const TasksBox = ({}) => {
  return (
    <div className="tasks-box">
      <header className="tasks-infos">
        <div className="created-tasks">
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className="done-tasks">
          <p>Concluídas</p>
          <span>2 de 10</span>
        </div>
      </header>
      {/* <main className="tasks-content">
        <ClipboardText size={56} className="clip-icon" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </main> */}
      <div className="list">        
        <Tasks
          id={() => uuid}
          title={
            'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
          }
          isComplete={false}
        />
        <Tasks id={() => uuid} title={'teste'} isComplete={false} />
      </div>
    </div>
  )
}

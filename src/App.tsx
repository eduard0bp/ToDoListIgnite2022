import { useState } from 'react'
import { Header } from './components/Header'
import { InputTasks } from './components/InputTasks'
import { iTasks } from './components/Tasks'
import { TasksBox } from './components/TasksBox'
import './global.scss'

function App() {
  const [tasks, setTasks] = useState<Array<iTasks>>([])

  return (
    <>
      <Header />
      <div className="wrapper">
        <InputTasks />
        <TasksBox />
      </div>
    </>
  )
}

export default App

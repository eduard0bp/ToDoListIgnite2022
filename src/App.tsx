import { Header } from './components/Header'
import { InputTasks } from './components/InputTasks'
import { TasksBox } from './components/TasksBox'
import './global.scss'

function App() {
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

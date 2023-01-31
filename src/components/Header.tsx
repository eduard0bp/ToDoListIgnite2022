import toDoLogo from '../assets/logo.svg'
import './Header.scss'

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <header className='todo-logo'>
      <img src={toDoLogo} />
    </header>
  )
}

import { Trash } from 'phosphor-react'

import './Tasks.scss'

export interface iTasks {
  id: any,
  title: string,
  isComplete: boolean
}

export const Tasks = ({title}: iTasks) => {
  return (
    <div className="tasks">
      <button className='check'>
        <div></div>
      </button>
      <p>
        {title}
      </p>
      <button className="trash-icon">
        <Trash size={24} />
      </button>
    </div>
  )
}

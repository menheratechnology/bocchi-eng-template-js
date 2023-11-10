import { Dispatch, SetStateAction } from 'react'

import styles from './style.module.scss'

import { TaskCard } from '~/components/Cards/TaskCard/TaskCard'
import { Task } from '~/entities/Task'

type Props = {
  incompleteTasks: Array<Task>
  setIncompleteTasks: Dispatch<SetStateAction<Array<Task>>>
  completeTasks: Array<Task>
  setCompleteTasks: Dispatch<SetStateAction<Array<Task>>>
}

export const CompleteTaskList = ({
  incompleteTasks,
  setIncompleteTasks,
  setCompleteTasks,
  completeTasks,
}: Props): React.ReactElement => {
  const back = (index: number) => {
    const newCompleteTasks = [...completeTasks]
    newCompleteTasks.splice(index, 1)

    completeTasks[index].isComplete = false
    const newIncompleteTasks = [...incompleteTasks, completeTasks[index]]

    setCompleteTasks(newCompleteTasks)
    setIncompleteTasks(newIncompleteTasks)
  }
  return (
    <div className={styles.listContainer}>
      <p>完了済みのタスク</p>
      <div className={styles.list}>
        {completeTasks.map((task, index) => (
          <TaskCard key={index} task={task} onClick={() => back(index)} />
        ))}
      </div>
    </div>
  )
}

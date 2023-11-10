import React, { Dispatch, SetStateAction } from 'react'

import styles from './style.module.scss'

import { TaskCard } from '~/components/Cards/TaskCard/TaskCard'
import { Task } from '~/entities/Task'

type Props = {
  incompleteTasks: Array<Task>
  setIncompleteTasks: Dispatch<SetStateAction<Array<Task>>>
  completeTasks: Array<Task>
  setCompleteTasks: Dispatch<SetStateAction<Array<Task>>>
}
export const IncompleteTaskList = ({
  incompleteTasks,
  setIncompleteTasks,
  setCompleteTasks,
  completeTasks,
}: Props): React.ReactElement => {
  const complete = (index: number) => {
    const newIncompleteTasks = [...incompleteTasks]
    newIncompleteTasks.splice(index, 1)

    incompleteTasks[index].isComplete = true
    const newCompleteTasks = [...completeTasks, incompleteTasks[index]]

    setIncompleteTasks(newIncompleteTasks)
    setCompleteTasks(newCompleteTasks)
  }
  return (
    <div className={styles.listContainer}>
      <p>未完了のタスク</p>
      <div className={styles.list}>
        {incompleteTasks.map((task: Task, index) => (
          <TaskCard key={index} task={task} onClick={() => complete(index)} />
        ))}
      </div>
    </div>
  )
}

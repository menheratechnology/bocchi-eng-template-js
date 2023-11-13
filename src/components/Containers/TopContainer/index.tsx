import { useState } from 'react'

import styles from './style.module.scss'

import { AddTaskForm } from '~/components/Forms/AddTaskForm'
import { CompleteTaskList } from '~/components/Tasks/CompleteTaskList'
import { IncompleteTaskList } from '~/components/Tasks/IncompleteTaskList'
import { Task } from '~/entities/Task'

export const TopContainer = (): React.ReactElement => {
  const [incompleteTasks, setIncompleteTasks] = useState<Array<Task>>([])
  const [completeTasks, setCompleteTasks] = useState<Array<Task>>([])

  return (
    <div className={styles.topWrapper}>
      <AddTaskForm
        incompleteTasks={incompleteTasks}
        setIncompleteTasks={setIncompleteTasks}
      />
      <IncompleteTaskList
        incompleteTasks={incompleteTasks}
        setIncompleteTasks={setIncompleteTasks}
        completeTasks={completeTasks}
        setCompleteTasks={setCompleteTasks}
      />
      <CompleteTaskList
        incompleteTasks={incompleteTasks}
        setIncompleteTasks={setIncompleteTasks}
        completeTasks={completeTasks}
        setCompleteTasks={setCompleteTasks}
      />
    </div>
  )
}

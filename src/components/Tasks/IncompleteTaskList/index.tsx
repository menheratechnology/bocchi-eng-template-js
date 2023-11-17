import React, { Dispatch, SetStateAction } from 'react'

import styles from './style.module.scss'

//このコンポーネントを使ってください
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
    {
      /* TODO:完了ボタンの処理を書く */
    }
    const newIncompleteTasks = [...incompleteTasks]
    newIncompleteTasks.splice(index, 1)

    incompleteTasks[index].isComplete = true
    const newCompleteTasks = [...completeTasks, incompleteTasks[index]]

    setIncompleteTasks(newIncompleteTasks)
    setCompleteTasks(newCompleteTasks)
  }
  return (
    <div className={styles.listWrapper}>
      <div className={styles.bar} />

      <div className={styles.list}>
        <p>未完了のタスク</p>
        {/* TODO:未完了のタスク一覧を作成する */}
        {incompleteTasks.map((task: Task, index) => (
          <TaskCard
            key={index}
            task={task}
            onClick={() => complete(index)}
            complete={task.isComplete}
          />
        ))}
      </div>
    </div>
  )
}

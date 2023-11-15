import { Dispatch, SetStateAction } from 'react'

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

export const CompleteTaskList = ({
  incompleteTasks,
  setIncompleteTasks,
  setCompleteTasks,
  completeTasks,
}: Props): React.ReactElement => {
  const back = (index: number) => {
    {
      /* 戻るボタンの処理を書く */
    }
  }
  return (
    <div className={styles.listWrapper}>
      <div className={styles.bar} />

      <div className={styles.list}>
        <p>完了済みのタスク</p>
        {/* TODO:完了済みのタスク一覧を作成する */}
      </div>
    </div>
  )
}

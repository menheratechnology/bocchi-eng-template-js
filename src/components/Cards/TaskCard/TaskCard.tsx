import styles from './style.module.scss'

import { Task } from '~/entities/Task'

type Props = {
  task: Task
  onClick: () => void
}

export const TaskCard = ({ task, onClick }: Props): React.ReactElement => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <p>{task.title}</p>
        <button onClick={onClick}>{task.isComplete ? '戻す' : '完了'}</button>
      </div>
      <div>
        <p>{task.description}</p>
      </div>
    </div>
  )
}

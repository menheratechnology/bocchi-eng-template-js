import styles from './style.module.scss'

import { Task } from '~/entities/Task'

type Props = {
  task: Task
  onClick: () => void
  complete: boolean
}

export const TaskCard = ({
  task,
  onClick,
  complete,
}: Props): React.ReactElement => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <p>{task.title}</p>
        <button
          onClick={onClick}
          style={{
            backgroundColor: complete ? '#66cc66' : '#ffcc66',
            border: complete ? 'solid 1px #66cc66' : 'solid 1px #ffcc66',
          }}
        >
          {task.isComplete ? '戻す' : '完了'}
        </button>
      </div>
      <div>
        <p>{task.description}</p>
      </div>
    </div>
  )
}

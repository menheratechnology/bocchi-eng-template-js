import styles from './style.module.scss'

import { TaskCard } from '~/components/Cards/TaskCard/TaskCard'
import { Task } from '~/entities/Task'

type Props = {
  tasks: Array<Task>
  onClick: (index: number) => void
}
export const CompleteTaskList = ({
  tasks,
  onClick,
}: Props): React.ReactElement => {
  return (
    <div className={styles.listContainer}>
      <p>完了済みのタスク</p>
      <div className={styles.list}>
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} onClick={() => onClick(index)} />
        ))}
      </div>
    </div>
  )
}

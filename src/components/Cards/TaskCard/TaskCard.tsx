import styles from './style.module.scss'

//このコンポーネントを使ってください
import { ActionButton } from '~/components/Buttons/ActionButton'
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
        {/* TODO:完了,戻すボタンを作る */}
        <ActionButton complete={complete} onClick={onClick}>
          {complete ? '戻る' : '完了'}
        </ActionButton>
      </div>
      <div>
        <p>{task.description}</p>
      </div>
    </div>
  )
}

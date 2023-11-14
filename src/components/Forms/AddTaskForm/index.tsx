import { Dispatch, SetStateAction, useState } from 'react'

import styles from './style.module.scss'

// ↓これらのコンポーネントを使ってください
import { BasicButton } from '~/Buttons/BasicButton'
import { TextAreaInput } from '~/Inputs/TextAreaInput'
import { TextInput } from '~/Inputs/TextInput'
import { Task } from '~/entities/Task'

type Props = {
  incompleteTasks: Array<Task>
  setIncompleteTasks: Dispatch<SetStateAction<Array<Task>>>
}

export const AddTaskForm = ({
  incompleteTasks,
  setIncompleteTasks,
}: Props): React.ReactElement => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const addTask = () => {
    // TODO: タスクを追加する処理を書く
  }
  return (
    <div className={styles.formWrapper}>
      <p>新しいタスクを追加</p>
      {/* TODO: タスク名を入力するinputを用意する */}

      {/* TODO: タスクの詳細を入力するtextareaを用意する */}

      {/* TODO: タスクを保存するボタンをつくる */}
    </div>
  )
}

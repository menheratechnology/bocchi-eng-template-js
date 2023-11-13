import { Dispatch, SetStateAction, useState } from 'react'

import styles from './style.module.scss'

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
    const newTask: Task = {
      title: title,
      description: description,
      isComplete: false,
    }
    const newIncompleteTasks = [...incompleteTasks, newTask]
    setIncompleteTasks(newIncompleteTasks)
  }
  return (
    <div className={styles.formWrapper}>
      <p>新しいタスクを追加</p>
      <TextInput
        label="タスク名"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        value={title}
        placeholder="タスク名を入力"
      />
      <TextAreaInput
        label="詳細"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}
        placeholder="詳細を入力"
      />
      <BasicButton onClick={addTask}>追加</BasicButton>
    </div>
  )
}

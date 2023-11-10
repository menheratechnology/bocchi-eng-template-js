import { Dispatch, SetStateAction, useState } from 'react'

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
    <div>
      <label>タスク名</label>
      <input
        placeholder="タスク名"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        value={title}
      />
      <label>詳細</label>
      <textarea
        placeholder="詳細"
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        value={description}
      />
      <button onClick={addTask}>追加</button>
    </div>
  )
}

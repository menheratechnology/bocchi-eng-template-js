import { useState } from 'react'

import { AddTaskForm } from '~/components/Forms/AddTaskForm'
import { CompleteTaskList } from '~/components/Tasks/CompleteTaskList'
import { IncompleteTaskList } from '~/components/Tasks/IncompleteTaskList'
import { Task } from '~/entities/Task'

export const TopContainer = (): React.ReactElement => {
  const [isShowAddTaskModal, setIsShowAddTaskModal] = useState(false)
  const [incompleteTasks, setIncompleteTasks] = useState<Array<Task>>([])
  const [completeTasks, setCompleteTasks] = useState<Array<Task>>([])

  return (
    <div>
      <button
        onClick={() => {
          setIsShowAddTaskModal(!isShowAddTaskModal)
        }}
      >
        タスクの追加
      </button>
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
      {isShowAddTaskModal && (
        <AddTaskForm
          incompleteTasks={incompleteTasks}
          setIncompleteTasks={setIncompleteTasks}
        />
      )}
    </div>
  )
}

import { useState } from "react"
import "./index.css"
import clsx from "clsx"
import { useDispatch } from "react-redux"
import { deleteTask, toggleTask } from "../../features/task/taskSlice"

/**
 * @type {import("react").FC<{task:import("../../features/task/taskSlice").Task}>}
 */
const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleToggleDone = (id, status) => {
    dispatch(toggleTask({ id, done: status }))
  }

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className={clsx("task", { "task-done": task.done })}>
      <div className="checkbox-wrapper">
        <button
          className="btn-checkbox"
          onClick={() => handleToggleDone(task.id, !task.done)}
        >
          {task.done && <CheckIcon />}
        </button>
      </div>
      <span className="task-label">{task.label}</span>
      <div className="btn-wrapper">
        <button className="btn-delete" onClick={() => handleDelete(task.id)}>
          <TrashIcon />
        </button>
      </div>
    </div>
  )
}

const CheckIcon = () => {
  return (
    <svg
      width="20px"
      style={{ overflow: "visible" }}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const TrashIcon = () => {
  return (
    <svg
      width="20px"
      style={{ overflow: "visible" }}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default Task

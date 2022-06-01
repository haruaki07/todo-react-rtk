import { createRef } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../../features/task/taskSlice"
import "./index.css"

const FormAddTask = () => {
  /** @type {import("react").RefObject<HTMLInputElement>} */
  const inputRef = createRef()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    const label = inputRef.current.value
    if (label.replace(/\s/g, "") === "") return

    dispatch(addTask(label))

    inputRef.current.value = ""
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task..."
        className="input-add-task"
        ref={inputRef}
      />
      <button className="btn-add-task" type="submit">
        Add
      </button>
    </form>
  )
}

export default FormAddTask

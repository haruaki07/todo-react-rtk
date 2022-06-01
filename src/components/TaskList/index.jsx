import Task from "../Task"
import "./index.css"
import { useSelector } from "../../store"

const TaskList = () => {
  const tasks = useSelector((state) => state.task.items)

  return (
    <div className="task-list">
      {tasks.map((t, i) => (
        <Task key={i} task={t} />
      ))}
    </div>
  )
}

export default TaskList

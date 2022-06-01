import "./App.css"
import FormAddTask from "./components/FormAddTask"
import TaskList from "./components/TaskList"
import logo from "./logo.svg"

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <h1 className="app-title">
          <img src={logo} alt="react" width={36} />
          Tasks
        </h1>
        <FormAddTask />
      </div>
      <div className="app-content">
        <TaskList />
      </div>
    </div>
  )
}

export default App

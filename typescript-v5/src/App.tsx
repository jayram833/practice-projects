import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import { Task } from "./types"
import TaskList from "./TaskList";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(newTask: Task) {
    setTasks([newTask, ...tasks])
  }

  return (
    <div>
      <h1 className="font-semibold text-4xl">Typescript</h1>
      <TaskList tasks={tasks} />
      <AddTaskForm onAddTask={addTask} />
    </div>
  )
}

export default App

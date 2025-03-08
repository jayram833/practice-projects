import { useState } from "react";
import data from "./data";
import TaskForm from "./TaskForm";
import { Task } from "./type";

console.log(data)


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
    <div>
      <TaskForm />
    </div>
  )
}

export default App

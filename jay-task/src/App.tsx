import { useEffect, useState } from "react";
import data from "./data";
import TaskForm from "./components/TaskForm";
import { Task } from "./type";
import Navbar from "./components/Navbar";
import { Theme } from "./type";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState<Theme>("light");
  const [taskForm, setTaskForm] = useState(false);
  const [mode, setMode] = useState("add");
  let tempData = {};

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme])

  useEffect(() => {
    setTasks(data)
  }, [])

  function handleTaskForm() {
    setTaskForm(true)
  }

  function handleAddTask(formData) {
    setTasks([...tasks, formData])
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter(taskItem => taskItem.id !== taskId))
  }

  function handleEditTask(task) {
    tempData = task;
    setTaskForm(true);
    setMode("edit");
  }

  return (
    <div className="dark:bg-slate-950 h-screen bg-slate-100  dark:text-gray-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="px-5">

        <div className="flex justify-end">
          {!taskForm &&
            <button onClick={handleTaskForm} className="cursor-pointer dark:hover:bg-slate-800 self-center border-gray-500 border-[0.5px] rounded-md px-2 mt-4 py-1">+ Task</button>
          }
        </div>

        <div>
          {taskForm && mode === "edit" &&
            <TaskForm setTaskForm={setTaskForm} onAddTask={handleAddTask} mode={mode} tempData={tempData} />}
          {taskForm && mode === "add" &&
            <TaskForm setTaskForm={setTaskForm} onAddTask={handleAddTask} mode={mode} />}
        </div>

        <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
      </div>
    </div>
  )
}

export default App

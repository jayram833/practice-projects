import { createContext, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import TaskInputForm from "./components/TaskInputForm";
import Button from "./components/Button";
import TaskList from "./components/TaskList";

export const ThemeContext = createContext();
export const FormModalContext = createContext();
export const TasksContext =createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const [formModal, setFormModal] = useState("close");
  const [tasks, setTasks] = useState([]);

  function toggleTheme(){
    setTheme(prevTheme=> prevTheme === "dark" ? "light": "dark");
  }

  function toggleFormModal(){
    setFormModal(prevState=> prevState === "close" ? "open" : "close")
  }

  async function fetchTasks(){
    const result = await window.electron.invoke("fetch-tasks");
    if(result.success){
      setTasks(result.tasks);
    }else{
      console.error(result.message);
    }
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  return (
    <div className="bg-gray-50">
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <Header />
        <FormModalContext.Provider value={{formModal, toggleFormModal}}>
        {formModal==="open" &&  <TaskInputForm /> }
        </FormModalContext.Provider>
        <Button className={`bg-blue-600 text-white hover:bg-blue-500 cursor-pointer px-4 py-1.5 rounded-md`} onClick={toggleFormModal}>Add Task</Button>
        <TasksContext.Provider value={{tasks}}>
          <TaskList />
        </TasksContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App

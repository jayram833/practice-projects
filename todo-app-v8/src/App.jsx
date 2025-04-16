import { createContext, useState } from "react"
import TodoList from "./TodoList";

const TodosContext = createContext();

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    const newItem = {id: Date.now(),todo:inputText, isCompleted:false, priority:"low"};
    setTodos([...todos, newItem]);
    setInputText("");
  }

  return (
    <div className=" h-[100dvh]">
        <div className="flex justify-center flex-col items-center bg-amber-400 p-4">
        <h1 className="text-4xl font-semibold text-center">My Todo App</h1>
          <form onSubmit={handleSubmit}>
            <input value={inputText} onChange={e=>setInputText(e.target.value)} type="text" placeholder="Todo..." className="bg-white w-70 px-2 py-1 rounded-sm focus:outline-none"/>
            <button type="submit" className="bg-lime-500 px-4 py-1 rounded-sm cursor-pointer">Add</button>
          </form>
        </div>
          <div className="mt-5 flex justify-center">
            <TodosContext.Provider value={{todos,setTodos, setInputText}}>
              <TodoList />
            </TodosContext.Provider>
          </div>

    </div>
  )
}



export {TodosContext};
export default App

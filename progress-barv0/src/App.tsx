import { useState } from "react"

type NewTodo = {
  id: number,
  todo: string,
  completed: boolean
}


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  function handleAddTodo(e) {
    e.preventDefault()
    const newItem: NewTodo = { id: Date.now(), todo: inputText, completed: false };
    setTodos([newItem, ...todos]);
    setInputText("");
  }

  function handleDelete(id: number) {
    setTodos(todos.filter(i => i.id !== id))
  }

  return (
    <div className="bg-slate-200">
      <h1 className="font-semibold text-4xl text-center">Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" placeholder="Todo..." value={inputText} onChange={e => setInputText(e.target.value)} className="focus:outline-none bg-white p-1 w-100" />
        <button type="submit" className="cursor-pointer bg-green-400 px-3 py-1 rounded-sm">Add</button>
      </form>

      <div>
        <Todos todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  )
}

type TodosProps = {
  todos: NewTodo[],
  onDelete: () => void
}

function Todos({ todos, onDelete }: TodosProps) {
  return <ul className="w-[500px]" >
    {todos.map(item => <Todo key={item.id} item={item} onDelete={onDelete} />)}
  </ul>
}

type ItemProps = {
  item: NewTodo,
  onDelete: () => void
}

function Todo({ item, onDelete }: ItemProps) {
  return <li className="p-2 rounded-md flex justify-between bg-blue-300">
    <span>{item.todo}</span>
    <button onClick={() => onDelete(item.id)} className="cursor-pointer bg-red-400 px-3 py-1 rounded-sm">Delete</button>
  </li>
}



export default App

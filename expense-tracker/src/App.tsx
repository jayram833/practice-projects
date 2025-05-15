import { useRef, useState } from "react"

type Todo = {
  id: number,
  text: string,
  completed: boolean
}


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const inputRef = useRef("");

  function handleAdd() {
    const newItem: Todo = { id: Date.now(), text: inputRef.current.value, completed: false }
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  }

  function handleDelete(id: number) {
    setTodos(todos.filter(item => item.id !== id))
  }

  function handleChange(id: number) {
    todos.map(i => i.id === id ? { ...i, completed: !i.completed } : i)
    setTodos([])
  }

  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" placeholder="Enter todo" ref={inputRef} />
      <button onClick={handleAdd}>Add</button>

      <TodoList todos={todos} handleDelete={handleDelete} onStatusChange={handleChange} />
    </div>
  )
}

type TodosProps = {
  todos: Todo[],
  handleDelete: () => void,
  onStatusChange: () => void
}

function TodoList({ todos, handleDelete, onStatusChange }: TodosProps) {
  return <ul>
    {todos.map(item => <TodoItem item={item} key={item.id} onDelete={handleDelete} onStatusChange={onStatusChange} />)}
  </ul>
}

type TodoItemProps = {
  item: Todo,
  onDelete: () => void,
  onStatusChange: () => void
}

function TodoItem({ item, onDelete, onStatusChange }: TodoItemProps) {
  return <li>
    <input type="checkbox" checked={item.completed} onChange={() => onStatusChange(item.id)} />
    <span>{item.text}</span>
    <button onClick={() => onDelete(item.id)}>Delete</button>
  </li>
}

export default App

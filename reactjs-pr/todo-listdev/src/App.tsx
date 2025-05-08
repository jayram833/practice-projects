import { useRef, useState } from "react"

const data = [
  {
    id: 1,
    todo: "this is test todo item",
    completed: false
  },
  {
    id: 2,
    todo: "this is test todo item 2",
    completed: true
  },
  {
    id: 3,
    todo: "this is test todo item 3",
    completed: false
  }
]

type Todo = {
  id: number,
  todo: string,
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(data);

  function addNewTodo(e, newTodo, inputRef) {
    e.preventDefault();
    if (!newTodo.length) return;
    setTodos([...todos, { id: Date.now(), todo: newTodo, completed: false }]);
    inputRef.current.value = "";
  }

  function handleMarkCompleted(id) {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  function deleteTodo(id) {
    setTodos(todos.filter(item => item.id !== id))
  }

  return (
    <div className="bg-blue-200">
      <h1 className="text-4xl text-center font-semibold">Namaste Dev TodoList</h1>
      <AddTodoForm onAddTodo={addNewTodo} />
      <TodoList todos={todos} onMarkCompleted={handleMarkCompleted} onDeleteTodo={deleteTodo} />
    </div>
  )
}

type AddTodoProps = {
  onAddTodo: (e: React.FormEvent<HTMLFormElement>, newTodo: string, inputRef: React.RefObject<HTMLInputElement>) => void;
};


function AddTodoForm({ onAddTodo }: AddTodoProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  return <form onSubmit={(e) => onAddTodo(e, inputRef.current.value, inputRef)}>
    <input type="text" placeholder="todo..." ref={inputRef} className="bg-white px-2 py-1 rounded-md " />
    <button type="submit" className="bg-lime-500 px-2 py-1 rounded-md cursor-pointer">Add</button>
  </form>
}

type TodoListProps = {
  todos: Todo[],
  onMarkCompleted: (id: number) => void,
  onDeleteTodo: (id: number) => void
}

function TodoList({ todos, onMarkCompleted, onDeleteTodo }: TodoListProps) {
  return <ul>
    {todos.map(item => <Todo key={item.id} todo={item} onMarkCompleted={onMarkCompleted} onDeleteTodo={onDeleteTodo} />)}
  </ul>
}

type TodoProps = {
  todo: Todo,
  onMarkCompleted: (id: number) => void,
  onDeleteTodo: (id: number) => void
}

function Todo({ todo, onMarkCompleted, onDeleteTodo }: TodoProps) {
  return <li>
    <span onClick={() => onMarkCompleted(todo.id)} className={`${todo.completed ? "line-through" : "none"}`}>{todo.todo}</span>
    <button onClick={() => onDeleteTodo(todo.id)} className="bg-red-400 px-2 py-1 rounded-md cursor-pointer">Delete</button>
  </li>

}

export default App

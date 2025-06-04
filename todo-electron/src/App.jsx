import { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList"

function App() {
  const [todoItem, setTodoItem] = useState({
    id: null,
    todo: ""
  })
  const [todos, setTodos] = useState([]);
  async function getTodos() {
    const { todos } = await window.electron.invoke("get-todos");
    setTodos(todos);
  }

  useEffect(() => {
    getTodos();
  }, []);

  async function handleAddTodo() {
    await window.electron.invoke("add-todo", todoItem);

  }

  async function handleDeleteTodo(id) {
    await window.electron.invoke("delete-todo", id)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">📝 To-Do List</h1>

        {/* Input for adding tasks */}
        <input
          value={todoItem.todo}
          onChange={e => setTodoItem({ id: Date.now(), todo: e.target.value })}
          type="text"
          placeholder="Add a new task..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* Button to add task */}
        <button onClick={handleAddTodo} className="mt-3 w-full bg-green-500 cursor-pointer text-white py-2 px-4 rounded-lg hover:bg-green-600">
          Add Task
        </button>

        {/* Task List */}
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  )
}

export default App

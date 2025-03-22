import AddTodoForm from "./AddTodoForm"
import Todo from "./Todo"
import TodoList from "./TodoList"

function App() {
  return (
    <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-semibold text-center">Redux ToDo List</h1>
        <AddTodoForm />
        <TodoList />
    </div>
  )
}

export default App

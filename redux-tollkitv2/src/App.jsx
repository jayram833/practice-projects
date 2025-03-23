import { useSelector } from "react-redux"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import TodoListPlaceholder from "./TodoListPlaceholder"

function App() {
  const todoList = useSelector(state=>state.todo.todos)
  return (
    <div className="flex justify-center flex-col items-center">
        <h1 className="text-4xl font-semibold text-center">Redux ToDo List</h1>
        <AddTodoForm />
        {todoList.length<=0 ? <TodoListPlaceholder />:<TodoList />}
    </div>
  )
}

export default App

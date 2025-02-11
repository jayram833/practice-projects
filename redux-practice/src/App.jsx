import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { MdDelete } from "react-icons/md";

function App() {
  const [todoText, setTodoText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleAddTodo(e) {
    e.preventDefault();
    const newTodo = { id: Date.now(), todo: todoText };
    dispatch(addTodo(newTodo));
    setTodoText("");
  }

  function handleDeleteTodo(id) {
    dispatch(deleteTodo(id));
  }

  return (
    <div className="app">
      <h1>Todo App</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter todo..."
          value={todoText}
          className="input"
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <div className="todos-list">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="item">
              <span>{todo.todo}</span>
              <MdDelete
                className="icon"
                onClick={() => handleDeleteTodo(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

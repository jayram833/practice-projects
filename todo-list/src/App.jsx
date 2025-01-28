import { useState } from "react";
import Todo from "./Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoItem, setTodoItem] = useState({
    id: "",
    text: "",
    isCompleted: false,
  });
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(false);

  function handleChange(e) {
    setTodoItem({ ...todoItem, text: e.target.value });
  }

  function handleAddItem(e) {
    e.preventDefault();
    if (editing) {
      setTodos((prevTodo) =>
        prevTodo.map((todo) =>
          todo.id === editingId ? { ...todo, text: todoItem.text } : todo
        )
      );

      setEditing(false);
      setEditingId(null);
      setTodoItem({
        id: "",
        text: "",
        isCompleted: false,
      });
    } else {
      if (!todoItem.text) return;
      const newItem = { ...todoItem, id: Date.now() };
      setTodos([newItem, ...todos]);
      setTodoItem({
        id: "",
        text: "",
        isCompleted: false,
      });
    }
  }

  function handleEditItem(todo) {
    setEditing(true);
    setEditingId(todo.id);
    setTodoItem({ ...todo });
  }
  function handleDeleteItem(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Enter todo..."
            value={todoItem.text}
            onChange={handleChange}
          />
          <button type="submit">{editing ? "Edit" : "Add"}</button>
        </form>
      </div>

      <div>
        <ul>
          {todos.map((todo) => {
            return (
              <Todo
                key={todo.id}
                todo={todo}
                onEdit={handleEditItem}
                onDelete={handleDeleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

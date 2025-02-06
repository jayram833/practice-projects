import { useReducer, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [action.payload, ...state];
    case "delete":
      return [...state.filter((i) => i.id !== action.payload)];
  }
}

export default function App() {
  const [formData, setFormData] = useState({
    todo: "",
    priority: "",
  });

  const [todos, dispatch] = useReducer(reducer, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleAdd(e) {
    e.preventDefault();
    dispatch({ type: "add", payload: { ...formData, id: Date.now() } });
    setFormData({
      todo: "",
      priority: "",
    });
  }

  function handleDelete(id) {
    dispatch({ type: "delete", payload: id });
  }

  return (
    <div className="app">
      <h1>Todo List using useReducer hook</h1>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          name="todo"
          placeholder="Enter Todo..."
          value={formData.todo}
          onChange={handleChange}
          className="input-box"
        />
        <select name="priority" onChange={handleChange}>
          <option>Select Priority</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
        <button>Add Todo</button>
      </form>
      <div className="todos">
        {todos.map((item) => (
          <Todo key={item.id} item={item} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

function Todo({ item, onDelete }) {
  const priorityClasses = {
    high: "high",
    low: "low",
    medium: "medium",
  };

  let stylesClass = priorityClasses[item.priority];
  return (
    <div className="todo-row">
      <span>{item.todo}</span>
      <span className={`priority ${stylesClass}`}>{item.priority}</span>
      <MdOutlineDelete
        className="delete-icon"
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
}

import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function App() {
  const [value, setValue] = useLocalStorage("todo", []);
  const [inputText, setInputText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputText.length) return;
    setValue((prev) => [inputText, ...prev]);
    setInputText("");
  }

  return (
    <div>
      <h1>Use Local Storage Hook</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter todo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {value.map((todo, i) => (
          <Todo todo={todo} key={i} />
        ))}
      </div>
    </div>
  );
}

function Todo({ todo }) {
  return (
    <li>
      <span>{todo}</span>
      <button>delete</button>
    </li>
  );
}

import { FormEvent, useState } from "react";

type Todo = {
  id: number;
  text: string;
};

const App: FC = function () {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputText.length) return;
    const newTodo: Todo = { id: Date.now(), text: inputText };
    setTodos([...todos, newTodo]);
    setInputText("");
  }

  function deleteTodo(id: number) {
    const filteredItems = todos.filter((item) => item.id !== id);
    setTodos(filteredItems);
  }
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-gray-300">
      <h1 className="text-3xl font-semibold">
        Todo App Using Typescript and Tailwind css
      </h1>
      <form className="flex gap-4" onSubmit={addTodo}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Todo"
          className="transition:all w-60 rounded-md bg-white p-2 duration-300 focus:w-100 focus:outline-none"
        />
        <button
          type="submit"
          className="cursor-pointer rounded-md bg-blue-300 px-4 py-1 transition-all duration-300 hover:bg-blue-400"
        >
          Add
        </button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={deleteTodo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

function TodoItem({ todo, onDelete }) {
  return (
    <li className="my-2 flex max-w-xl items-center justify-between gap-2 rounded-md bg-blue-100 px-4 py-2">
      <span>{todo.text}</span>
      <button
        onClick={() => onDelete(todo.id)}
        className="cursor-pointer rounded-md bg-red-400 px-2 py-1 text-gray-900"
      >
        Delete
      </button>
    </li>
  );
}

export default App;

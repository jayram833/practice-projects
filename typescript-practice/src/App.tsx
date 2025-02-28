import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>("");

  function addTodo(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (inputText.trim() === "") return;
    setTodos([inputText, ...todos]);
    setInputText(""); // Clear input after adding
  }

  return (
    <div className="p-5">
      <h1 className="text-5xl font-semibold">Todo App using TypeScript</h1>
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        onAddTodo={addTodo}
      />
      <TodosList todos={todos} />
    </div>
  );
}

type TodoFormProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  onAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
};

const TodoForm = ({ inputText, setInputText, onAddTodo }: TodoFormProps) => {
  return (
    <form onSubmit={(e) => onAddTodo(e)} className="mt-5">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Todo..."
        className="rounded-md bg-blue-200 p-2 focus:outline-none"
      />
      <button
        type="submit"
        className="ml-5 cursor-pointer rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        Add
      </button>
    </form>
  );
};

type TodosListProps = {
  todos: string[];
};

const TodosList = ({ todos }: TodosListProps) => {
  return (
    <ul className="mt-5 bg-blue-100 p-3">
      {todos.map((item) => (
        <li
          className="mt-2 mb-2 flex items-center justify-between rounded-md bg-white px-4 py-2"
          key={item}
        >
          <span>{item}</span>
          <button
            className="ml-5 cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white"
            onClick={() => {}}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

import { useState } from "react";

const boardData = {
  pending: [
    { id: 1, title: "Task 1", description: "This is pending task 1" },
    { id: 2, title: "Task 2", description: "This is pending task 2" },
  ],
  inProgress: [
    { id: 3, title: "Task 3", description: "This task is in progress" },
  ],
  done: [{ id: 4, title: "Task 4", description: "This task is done" }],
};

function App() {
  const [tasks, setTasks] = useState(boardData);
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      task,
    };

    setTasks(prevTasks=> prevTasks.map(section=> section.category===category ? ));

    setTask("");
    setCategory("");
  }
  return (
    <div>
      <h1>Trello Board</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select status</option>
          <option value="pending">pending</option>
          <option value="inProgress">inProgress</option>
          <option value="done">done</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default App;

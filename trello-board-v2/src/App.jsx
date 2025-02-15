import { useState } from "react";

const data = {
  pending: [
    {
      id: 1,
      task: "learn react",
    },
    {
      id: 2,
      task: "learn react",
    },
  ],
  inprogress: [],
  completed: [],
};

const categories = ["pending", "inprogress", "completed"];
const initialForm = {
  id: "",
  task: "",
  category: "",
};
export default function App() {
  const [formData, setFormData] = useState(initialForm);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleClick() {
    console.log(formData);
    setFormData(initialForm);
  }
  return (
    <div>
      <h1>Trello Board</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Add Task..."
          name="task"
          value={formData.task}
          onChange={handleChange}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="categories-container">
        {categories.map((cat) => (
          <Section key={cat} cat={cat} />
        ))}
      </div>

      <div className="tasks">{}</div>
    </div>
  );
}

function Task() {
  return (
    <div>
      <p>This is Task</p>
      <p>pending</p>
    </div>
  );
}

function Section({ cat }) {
  return (
    <div className="category">
      <h1>{cat}</h1>
    </div>
  );
}

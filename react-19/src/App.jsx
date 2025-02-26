import { useState, useTransition } from "react";
import Loader from "./Loader";

function App() {
  const [formData, setFormData] = useState({ name: "", job: "" });
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    startTransition(async function () {
      try {
        const response = await fetch(`https://reqres.in/api/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
      } catch (e) {
        setError(e.message);
        console.error(e);
      } finally {
        setFormData({ name: "", job: "" });
      }
    });
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center text-4xl">React-19</h1>
      <div className="w-2xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center rounded-md bg-amber-200 py-5"
        >
          <span className="my-1 space-x-2">
            <label htmlFor="name">Name:</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              className="rounded-md bg-white p-1"
              value={formData.name}
              onChange={handleChange}
            />
          </span>

          <span className="my-1 space-x-2">
            <label htmlFor="job">Job:</label>
            <input
              name="job"
              id="job"
              type="text"
              placeholder="Job"
              className="rounded-md bg-white p-1"
              value={formData.job}
              onChange={handleChange}
            />
          </span>
          {isPending ? (
            <Loader />
          ) : (
            <button
              className="py-.5 my-2 w-20 cursor-pointer rounded-md border-1 bg-blue-200 px-2 hover:bg-blue-300"
              type="submit"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;

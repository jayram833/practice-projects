import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="bg-gray-100 p-5">
      <h1 className="text-center text-2xl">Memoisation</h1>
      <form className="flex flex-col items-center justify-center gap-2">
        <span>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            id="name"
            className="bg-white"
          />
        </span>
        <span>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            placeholder="age"
            className="bg-white"
          />
        </span>
        <span>
          <label htmlFor="address">Address:</label>
          <textarea name="address" id="address" className="bg-white"></textarea>
        </span>
        <span>
          <label htmlFor="select">Select:</label>
          <select name="select" id="select" className="bg-white">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </span>
        <span className="space-x-2">
          <input type="checkbox" id="ch" className="bg-white" />
          <label htmlFor="ch">Checkbox 1</label>
        </span>
        <span className="space-x-2">
          <input type="checkbox" id="ch1" className="bg-white" />
          <label htmlFor="ch1">Checkbox 2</label>
        </span>
        <span className="space-x-2">
          <input type="radio" id="rad" name="rad" />
          <label htmlFor="rad">Radio 1</label>
        </span>
        <span className="space-x-2">
          <input type="radio" id="rad1" name="rad" />
          <label htmlFor="rad1">Radio 2</label>
        </span>
      </form>
    </div>
  );
}

export default App;

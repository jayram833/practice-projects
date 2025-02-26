import users from "./assets/MOCK_DATA.json";
import { useEffect, useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      findUser(inputText);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputText]);

  function findUser(query) {
    if (!query.length) return;
    setResult(
      users.filter((user) =>
        user.first_name.toLowerCase().includes(query) ? user : null
      )
    );
  }
  return (
    <div className="app">
      <h1>Search Users</h1>
      <input
        type="text"
        placeholder="search user..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <ul>
        {result.length > 0 &&
          result.map((user) => <li key={user.id}>{user.first_name}</li>)}
      </ul>
    </div>
  );
}

export default App;

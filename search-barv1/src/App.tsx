import { useEffect, useState } from "react";
import items from "./assets/items.json"

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function searchTerm(word) {
    if (word.length <= 2) return;
    setResult(items.filter((item) => item.name.toLowerCase().includes(word) ? item : ""));
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      searchTerm(query)
    }, 500);

    return () => clearTimeout(timer);
  }, [query])

  return (
    <div>
      <form>
        <input type="text" placeholder="Search..." value={query} onChange={e => setQuery(e.target.value)} />
      </form>
      <div>
        <ul>
          {result.map(item => <li key={item.id}>{item.name}</li>)}

        </ul>
      </div>
    </div>
  )
}

export default App

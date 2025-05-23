import { useEffect, useState } from "react";
import items from "./assets/items.json"

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query.length <= 2) {
      setResult([]);
      return;
    }

    const timer = setTimeout(() => {
      const normalizedQuery = query.toLowerCase();
      const filtered = items.filter(item =>
        item.name.toLowerCase().includes(normalizedQuery)
      );
      setResult(filtered);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

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

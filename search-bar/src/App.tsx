import { useEffect, useState } from "react";
import data from "./MOCK_DATA.json";
import ProgressBar from "./ProgressBar";
import Pagination from "./Pagination";

function App() {
  const [inputText, setInputText] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  function handleSearch(e) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText) {
        const filteredData = data.filter((item) =>
          item.first_name.toLowerCase().includes(inputText.toLowerCase())
        );
        setResult(filteredData);
      } else {
        setResult([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [inputText]);

  return (
    <div>
      <h1>Search Box</h1>
      <div>
        <ProgressBar />
        <Pagination />
      </div>
      <input
        type="text"
        value={inputText}
        placeholder="search"
        onChange={handleSearch}
      />
      <ul>
        {result.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

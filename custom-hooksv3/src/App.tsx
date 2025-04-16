import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";


function App() {
  const [inputText, setInputText] = useState("");
  const [storedValue, setStoredValue] = useLocalStorage("name", "");

  function handleClick() {
    setStoredValue(inputText);
    setInputText("");
  }
  return (
    <div>
      <h1>Custom Hook- useLocalstorage</h1>
      <input type="text" placeholder="enter name" value={inputText} onChange={e => setInputText(e.target.value)} />
      <button onClick={handleClick}>Add</button>

      <p>{storedValue}</p>
    </div>
  )
}

export default App

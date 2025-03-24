import MyMemo from "./MyMemo"
import MyUseMemo from "./MyUseMemo"
import MyUseCallback from "./MyUseCallback"
import { useRef, useState } from "react";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [storedValue, setStoredValue] = useLocalStorage("names", [])
  const inputRef = useRef();
  function handleClick(){
    setStoredValue([...storedValue,inputRef.current.value]);
    inputRef.current.value="";
  }

  return (
    <div>
        <h1>Memo, useMemo and useCallback in react</h1>
        {/* <MyMemo /> */}
        {/* <MyUseMemo /> */}
        {/* <MyUseCallback /> */}

        <input type="text" ref={inputRef} placeholder="Enter Text..."/>
        <button onClick={handleClick}>Add</button>

        <ul>
          {storedValue.map(item=> <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default App

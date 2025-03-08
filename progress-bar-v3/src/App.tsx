import { useEffect, useRef, useState } from "react"
import Child from "./Child";

function App() {
  const [progress, setProgress] = useState(0);
  const inputRef = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      if (progress <= 90) {
        setProgress(progress + 10)
      }
    }, 1000)
  }, [progress])

  function getVal<T>(arr: T[]) {
    return arr[0]
  }

  const nums = [1, 2, 3, 4];
  getVal(nums)

  const strs = ["test", "test2"];
  getVal(strs);


  function handleClick() {
    console.log(inputRef.current.value)
  }

  return (
    <div>
      <h1>React Practice</h1>

      <div style={{ border: "1px solid", width: "500px", height: "10px", borderRadius: "5px" }}>
        <div style={{ height: "10px", transition: "width 0.5s, transform 0.3s ease", backgroundColor: "red", borderRadius: "5px", width: `${progress}%` }}>
          <span style={{ fontSize: "10px", position: "absolute", left: "30px", color: "white" }}>{progress >= 10 && progress}%</span>

        </div>
      </div>
      <Child ref={inputRef} placeholder="enter text" />
      <button onClick={() => handleClick()}>get Input value</button>
    </div >
  )
}

export default App

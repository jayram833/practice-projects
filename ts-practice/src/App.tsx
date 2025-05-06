import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Typescript practice counter app</h1>
      <Counter count={count} />
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

type Count = {
  count: number
}

function Counter({ count }: Count) {
  return <h2>{count}</h2>
}

export default App

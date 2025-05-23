import { memo, useCallback, useMemo, useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  const test = useCallback((a: number) => {
    return a + 2;
  }, [])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      {/* <Child firstName="Jayram" test={test} /> */}
      <MyMemo />
    </div>
  )
}

type NameProps = {
  firstName: string,
  test: (a: number) => number
}

const Child = memo(function ({ firstName, test }: NameProps) {
  console.log(test(2))
  console.log("rendered")
  return <h1>{firstName}</h1>
})

function MyMemo() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(4);

  const sqr = useMemo(() => {
    console.log("ren")
    return ;
  }, [num])

  function calcSquare() {
    setNum(sqr);
  }
  return <div>
    <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    <button onClick={() => calcSquare()}>Calc Square: {num}</button>
  </div>
}




export default App




import { forwardRef, useRef } from "react"

function App() {
  const inputRef = useRef(null);
  function handleFocus() {
    inputRef.current.focus()
  }
  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

const Child = forwardRef(function (props, ref) {
  return <input type="text" ref={ref} />
})

export default App

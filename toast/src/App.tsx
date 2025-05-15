import { useEffect, useState } from "react"
import Toast from "./Toast"

function App() {
  const [showSuccess, setShoeSuccess] = useState(false);

  function handleSuccessToast() {
    setShoeSuccess(true);
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setShoeSuccess(false);
    }, 1000)

    return () => clearTimeout(timer)
  }, [showSuccess])

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Toast Component</h1>
      <button className="bg-green-400 rounded-sm cursor-pointer px-2 py-1" onClick={handleSuccessToast}>Success</button>
      <button className="bg-yellow-400 rounded-sm cursor-pointer px-2 py-1">Warning</button>
      <button className="bg-red-400 rounded-sm cursor-pointer px-2 py-1">Error</button>
      {showSuccess &&
        <Toast data="This is testing toast" bgColor="bg-blue-500" />}
      {showSuccess &&
        <Toast data="This is testing toast" bgColor="bg-blue-500" />}
      {showSuccess &&
        <Toast data="This is testing toast" bgColor="bg-blue-500" />}
    </div>
  )
}

export default App

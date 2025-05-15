import { useEffect, useState } from "react"

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds(seconds + 1)
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds])

  function handleStart() {

  }
  function handleStop() {
    setSeconds(0);
  }
  function handleReset() { }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="font-semibold text-4xl text-center">Stopwatch</h1>
      <h2 className="font-semibold">Time: {seconds}s</h2>
      <div className="flex gap-5">
        <Button label="Start" onClick={handleStart} />
        <Button label="Stop" onClick={handleStop} />
        <Button label="Reset" onClick={handleReset} />
      </div>
    </div>
  )
}


type ButtonProps = {
  label: string,
  onClick: () => void
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick} className="bg-red-500 px-3 py-1 cursor-pointer rounded-sm">{label}</button>
}

export default App

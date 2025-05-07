import { useEffect, useRef, useState } from "react"

function App() {
  const inputRef = useRef("");
  const [won, setWon] = useState(false);
  const randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber)

  function handleCheck() {
    if (randomNumber === Number(inputRef.current.value)) {
      setWon(true);
    }

  }

  function handleCloseWinningWindow() {
    setWon(false);
  }

  return (
    <div className="bg-pink-500 flex flex-col items-center justify-center gap-5 h-screen">
      <h1>Guess My Number</h1>
      {randomNumber}
      <div>
        <input ref={inputRef} type="number" placeholder="Enter number 1 to 20" className="bg-white rounded-sm px-2 py-1 focus:outline-none" />
        <div>
          <button onClick={() => handleCheck()} className="bg-pink-300 rounded-md px-2 py-1 cursor-pointer">Check</button>
          <button className="bg-pink-300 rounded-md px-2 py-1 cursor-pointer">Reset Game</button>
        </div>
        {won && <WinningWindow onClose={handleCloseWinningWindow} />}
      </div>
    </div>
  )
}

function WinningWindow({ onClose }) {
  return <div className="fixed inset-0 flex items-center justify-center bg-slate-300 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-green-500">🎉 Congratulations! 🎉</h2>
      <p className="text-lg mt-2">You Won!</p>
      <button
        onClick={onClose}
        className="mt-4 px-4 py-2 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-700 transition"
      >
        Close
      </button>
    </div>
  </div>
}

export default App

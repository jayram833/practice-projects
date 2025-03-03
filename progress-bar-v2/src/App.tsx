import { useEffect, useState } from "react"

function App() {
  const [progress, setProgress] = useState<number>(0);


  useEffect(() => {
    let test = setInterval(() => {
      if (progress <= 90) {
        setProgress(progress + 10);
      }
    }, 1000)
    return () => clearInterval(test)
  }, [progress])


  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="parent">
        <div style={{ backgroundColor: "red", width: `${progress}%`, height: "5px", transition: "width 0.5s ease-in-out", }}></div>
      </div>
      <p>{progress}%</p>
    </div >
  )
}

export default App

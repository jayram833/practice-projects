import { useEffect, useState } from "react"

function App() {
  return (
    <div>
      <h1 className="text-center text-4xl font-semibold">Progress Bar</h1>
      <ProgressBar />
    </div>
  )
}

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 10)
      }
    }, 500)

    return () => clearInterval(timer)
  }, [progress])


  return <div className="w-[500px] border-[1px] h-3 rounded-2xl mt-10 ml-20">
    <div style={{ "width": `${progress}%` }} className={`bg-red-400 transform-all duration-300 rounded-2xl relative  h-[10px]`}> {progress >= 10 && <span className="text-[9px] absolute top-[-2px] left-[10px]"> {progress}%</span>} </div>
  </div >
}


export default App

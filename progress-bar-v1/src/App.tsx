import { useEffect, useState } from "react"

function App() {
  const [progress, setPtogress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress <= 90) {
        setPtogress(progress + 10)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div>
      <h1 className="text-4xl font-semibold text-center">Progress Bar</h1>
      <div className="flex justify-center mt-20">
        <div className="border-[0.5px] h-[16px] rounded-2xl w-[500px]">
          <div style={{ width: `${progress}%` }} className="bg-red-500 h-[15px] rounded-2xl transition-all duration-300 flex items-center"><span className="text-xs pl-5">{progress}%</span></div>
        </div>
      </div>
    </div>
  )
}

export default App

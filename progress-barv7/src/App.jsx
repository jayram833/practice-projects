import { useEffect, useState } from "react"

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(progress <= 90){
        setProgress(prev=> prev+10);
      }
    }, 500);

    return ()=> clearInterval(timer);
  },[progress])

  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Progress Bar</h1>
      <div className="flex justify-center mt-10">
      <div className="w-[600px] border-[0.5px] h-[15px] rounded-md">
        <div style={{width: `${progress}%`}} className="h-[14px] rounded-md bg-lime-300 flex items-center transform-all duration-300">
          {progress>=10 && <span className="text-xs pl-5">{progress}%</span>}
        </div>
      </div>
      </div>
    </div>
  )
}

export default App

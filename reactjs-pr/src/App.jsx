import { useEffect, useState } from "react"
import Button from "./Button";

const numPages = [1,2,3,4,5];

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  function handlePrev(){
    setCurrentPage(cur=> cur-1)
  }
  function handleNext(){
    setCurrentPage(cur=> cur+1)
  }
  function handleSwitch(pageNumber){
    setCurrentPage(pageNumber)
  }
 
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold">Pagination</h1>
      <div className="border-[0.5px] rounded-md w-[600px] h-[300px] flex justify-center items-center">
        <h1 className="text-4xl font-semibold">{currentPage}</h1>
      </div>
      <div className="flex gap-2 mt-5 ml-50">
        <Button label="Prev" onClick={handlePrev}/>
        {numPages.map(page=> <Button label={page} key={page} onClick={handleSwitch} currentPage={currentPage} page={page}/>)}
        <Button label="Next" onClick={handleNext}/>
      </div>
    </div>
  )
}

export default App

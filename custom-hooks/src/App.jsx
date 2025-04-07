import { useState } from "react";
import useFetch from "./useFetch"

function App() {
  const [page, setPage] = useState(2);
  const {result:{data},error,loading}=useFetch(`https://reqres.in/api/unknown/${page}`);

  console.log(data)
  function handleInc(){
    setPage(page+1)
  }
  return (
    <div className="bg-gray-200">
      <h1 className="font-semibold text-4xl text-center p-2">User Form</h1>
      <button onClick={handleInc} className="bg-lime-300 cursor-pointer px-2 py-1 rounded-md ">GetData</button>
    </div>
  )
}

export default App

import { useState } from "react";
import useFetch from "./useFetch"
import Post from "./Post";



function App() {
  const [id, setId] = useState(1);
  const [data, error, loading] = useFetch(`https://fakestoreapi.com/carts/${id}`);


  function handleClick() {
    setId(prev => prev + 1)
  }


  return (
    <div>
      <button onClick={() => handleClick()}>Get Data</button>
      <Post />
    </div>
  )
}

export default App

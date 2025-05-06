
 
import { useState } from "react"
import useFetch from "./hooks/useFetch"

function App() {
  const [id, setId] = useState(1);
  const [result, loading, error] = useFetch(`https://fakestoreapi.com/carts/${id}`);

  function handleClick(){
    setId(prev=> prev+1);
  }

  return (
    <div>
        <h1>Custom React Hooks</h1>
        {loading && <p>Loading...</p>}
        {result.map((item,i)=> <p key={i}>Quantity: {item.quantity}</p>)}
        {error && <p>{error}</p>}
        <button onClick={()=> handleClick()}>Next</button>
    </div>
  )
}

export default App

import { useState } from "react"
import useFetch from "./useFetch";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [id, setId] = useState(1);
  const [data, loading, error] = useFetch(`https://dummyjson.com/carts/${id}`);
  const [value, setValue] = useLocalStorage(data, []);

  function getProduct(){
    setId(prev=>prev+1);
    setValue(data.products);
  }

  console.log(value)
  return (
    <div>
      <h1>Use Fetch hook</h1>
      <button onClick={()=>getProduct()}>Get Product</button>
    </div>
  )
}

export default App

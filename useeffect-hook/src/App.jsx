import { useEffect, useState } from "react"
const URL = "https://reqres.in/api/users/"
function App() {
  const [inputText, setInputText] = useState(2)

const controller = new AbortController();
async function getData() {
  try{
    const response = await fetch(`${URL}${inputText}`,{signal:controller.signal});
    if(!response.ok) throw new Error("Failed to fetch");
    const {data} = await response.json();
 console.log(data)
  }catch(e){
    if(e.name!=="AbortError"){
      console.error(e.message)
    }
  }
}

  useEffect(()=>{
    getData();
    return ()=>controller.abort();

  },[inputText])

  return (
    <div>
      <h1>use Effect hook</h1>
      <input type="number"  value={inputText} onChange={e=>setInputText(e.target.value)}/>
    </div>
  )
}

export default App

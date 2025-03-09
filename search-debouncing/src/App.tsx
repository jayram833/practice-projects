import { ChangeEvent, useEffect, useState } from "react"
import data from "./MOCK_DATA.json"

interface Result {
  first_name: string, id: number
}

function App() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState<Result[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputText(e.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputText.trim() === "") {
        setResult([]);
        return;
      };
      setResult(data.filter(item => item.first_name.toLowerCase().includes(inputText.toLowerCase())));
    }, 500)
    return () => clearTimeout(timer)
  }, [inputText]);

  return (
    <div className="bg-pink-600 p-5 h-screen">
      <h1 className="font-semibold text-xl  p-5">Search Component</h1>
      <div className="flex justify-center">
        <div>
          <input type="text" placeholder="Name..." className="bg-pink-50 focus:outline-none w-100 rounded-2xl px-4 py-1" value={inputText} onChange={handleChange} />
          {result.length > 0 && <ul className="w-100  bg-pink-50 rounded-2xl py-2 px-2">
            {result.map((item) => {
              return <li key={item.id} className="hover:bg-pink-200 hover:rounded-2xl px-2 py-1 cursor-pointer transition-all">{item.first_name}</li>
            })}
          </ul>}
        </div>
      </div>
    </div>
  )
}

export default App

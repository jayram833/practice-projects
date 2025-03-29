import { useRef } from "react"

function App() {
  const fileNameRef = useRef(null);

  async function handleCreate(){
    const fileName = fileNameRef.current.value;
    await window.electron.createFile(fileName);
  }
  async function handleWrite(){
    const fileName = fileNameRef.current.value;
    await window.electron.writeFile(fileName, "this is written programmtically");
  }
  async function handleRead(){
    const fileName = fileNameRef.current.value;
    const data =  await window.electron.readFile(fileName, );
    console.log(data)
  }

  return (
    <div className="bg-orange-400">
        <h1>Electron js practice</h1>
        <input type="text" className="bg-white" placeholder="File Name" ref={fileNameRef}/>
        <div className="flex flex-col gap-4 w-40 mt-5">
          <button onClick={handleCreate} className="bg-green-500 text-white cursor-pointer px-2 rounded-md">Create File</button>
          <button onClick={handleWrite} className="bg-lime-500 cursor-pointer px-2 rounded-md">Write File</button>
          <button onClick={handleRead} className="bg-red-500 text-white cursor-pointer px-2 rounded-md">Read File</button>
        </div>
    </div>
  )
}

export default App

import Button from "./Button"

const [, , , , arr] = [1, 2, 3, 10, 5, 8];
console.log(arr)

function App() {
  return (
    <div className="bg-pink-600 h-screen">
      <h1 className="font-semibold text-4xl text-center">Children Props</h1>

      <div>
        <Button className="bg-pink-100 rounded-md px-3 py-1 hover:bg-pink-300">Click</Button>
        <Button className="bg-lime-100 px-3 hover:bg-lime-200 rounded-2xl py-0.5">Increment 😊</Button>
      </div>
    </div>
  )
}

export default App

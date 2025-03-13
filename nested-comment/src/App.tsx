import Button from "./Button";

const data = [
  {
    id: 1,
    text: "This is a comment",
    replies: [
      {
        id: 2,
        text: "This is a nested reply",
        replies: [
          { id: 3, text: "This is a deeper nested reply", replies: [] }
        ]
      }
    ]
  }
]


function App() {
  return (
    <div>
      <h1 className="font-semibold text-4xl text-center">Nested Comments</h1>
    </div>
  )
}



function Input() {
  return <div className="ml-2">
    <textarea className="focus:outline-none border-[0.5px] border-blue-300" name="" id="" placeholder="Comment..."></textarea>
    <Button>Reply</Button>
    <Button>Comment</Button>
  </div>
}

export default App

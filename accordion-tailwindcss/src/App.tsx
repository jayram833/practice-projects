import { useState } from "react"

const data = [
  {
    title: "HTML", description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
  },
  {
    title: "CSS", description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML."
  },
  {
    title: "Javascript", description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
  }
]


function App() {


  return (
    <div>
      <h1>Accordion Component</h1>
      <div className="flex justify-center mt-20 flex-col items-center">
        {data.map(item => <Accordion key={item.title} item={item} />)}
      </div>
    </div>
  )
}

function Accordion({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen)
  }
  const { title, description } = item;
  return <div className="max-w-[600px] w-[600px] py-5">
    <div className="flex justify-between">
      <h1>{title}</h1> <button className="cursor-pointer" onClick={handleToggle}>{isOpen ? "🔽" : "▶️"}    </button>
    </div>
    {isOpen && <p>{description}</p>}
  </div>
}


export default App

import Accordion from "./Accordion"
import Button from "./Button"
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
      <div className="mt-15">
        <Button label={"test"} />
        <Button label={"click"} />
      </div>
    </div>
  )
}

export default App

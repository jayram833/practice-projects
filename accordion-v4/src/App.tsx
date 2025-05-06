import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";


const accordionData = [
  {
    id: 1,
    title: "What is React?",
    content: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    title: "What is a component?",
    content: "A component is a reusable piece of UI that can be nested, reused, and handled independently."
  },
  {
    id: 3,
    title: "What is a hook in React?",
    content: "Hooks are functions that let you use state and other React features in functional components."
  }
];

function App() {

  return (
    <div>
      <h1 className="font-semibold text-4xl text-center">Accordion</h1>
      <div>
        {accordionData.map((obj) => <Accordion key={obj.id} obj={obj} />)}
      </div>
    </div>
  )
}

function Accordion({ obj }) {
  const { id, title, content } = obj;
  const [show, setShow] = useState(false);

  function handleToggle() {
    setShow(prev => !prev)
  }
  return <div className="w-[500px] border-[0.5px]">
    <button onClick={() => handleToggle()} className="flex items-center justify-between cursor-pointer">
      <h3 className="font-semibold">{title}</h3>
      <span>{show ? <FaChevronDown /> : <FaChevronRight />}
      </span>
    </button>
    {show && <p>{content}</p>}
  </div>
}

export default App

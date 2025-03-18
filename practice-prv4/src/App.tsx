import { useState } from "react";

const tempData = [
  {
    id: "todo",
    title: "To Do",
    items: [
      {
        id: "item-1",
        task: "Design homepage"
      },
      {
        id: "item-2",
        task: "Write API docs"
      }
    ]
  },
  {
    id: "inProgress",
    title: "In Progress",
    items: [
      {
        id: "item-3",
        task: "Develop login feature"
      }
    ]
  },
  {
    id: "done",
    title: "Done",
    items: [
      {
        id: "item-4",
        task: "Set up database"
      }
    ]
  }
]

type Item = {
  id: string;
  task: string
}

type PropsItems = {
  id: string;
  title: string;
  items: Item[]
}
function App() {
  const [data, setData] = useState(tempData);
  return (
    <div className="bg-lime-50">
      <h1 className="text-4xl font-semibold text-center">Trello Board</h1>
      <div className="flex gap-5 justify-center mt-5 p-5">
        {data.map(item => <Section key={item.id} item={item} />)}
      </div>
    </div>
  )
}

type SectionProps = {
  item: PropsItems
}

function Section({ item }: SectionProps) {
  const obj = {
    todo: "bg-red-400",
    inProgress: "bg-yellow-300",
    done: "bg-lime-400",
  };

  return <div className={`${obj[item.id]} px-5 py-4 w-[250px] rounded-md`}>
    <h3 className="text-2xl border-b-2 font-semibold" > {item.title}</h3>
    <ul className="pt-2 flex flex-col gap-2">
      {item.items.map(ele => <Card key={ele.id} task={ele.task} />)}
    </ul>
  </div >
}

type CardProps = {
  task: string
}

function Card({ task }: CardProps) {
  return <li className="bg-gray-100 px-2 py-1 rounded-md">
    <p className="text-xs">{task}</p>
  </li>
}
export default App

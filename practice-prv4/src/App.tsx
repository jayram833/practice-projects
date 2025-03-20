import { useState } from "react";
import AddTaskForm from "./AddTaskForm";

const tempData = [
  {
    id: "todo",
    title: "To Do",
    items: [
      {
        id: "1",
        task: "Design homepage"
      },
      {
        id: "2",
        task: "Write API docs"
      }
    ]
  },
  {
    id: "inProgress",
    title: "In Progress",
    items: [
      {
        id: "3",
        task: "Develop login feature"
      }
    ]
  },
  {
    id: "done",
    title: "Done",
    items: [
      {
        id: "4",
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

  function handleSubmit(newItem) {
    const { category, ...rest } = newItem;
    console.log(category, rest)
    setData(data.map(item => item.id === category ? { ...item, items: [...item.items, newItem] } : item))
  }

  function handleDelete(itemId: string) {
    const updatedData = data.map((section) => ({
      ...section,
      items: section.items.filter((item) => item.id !== itemId),
    }));

    setData(updatedData);
  }

  return (
    <div className="bg-lime-50 flex flex-col items-center">
      <h1 className="text-4xl font-semibold text-center">Trello Board</h1>
      <AddTaskForm onSubmit={handleSubmit} />
      <div className="flex gap-5 justify-center mt-5 p-5">
        {data.map(item => <Section key={item.id} item={item} onDelete={handleDelete} />)}
      </div>
    </div>
  )
}

type SectionProps = {
  item: PropsItems
}

function Section({ item, onDelete }: SectionProps) {
  const obj = {
    todo: "bg-red-400",
    inProgress: "bg-yellow-300",
    done: "bg-lime-400",
  };

  return <div className={`${obj[item.id]} px-5 py-4 w-[250px] rounded-md`}>
    <h3 className="text-2xl border-b-2 font-semibold" > {item.title}</h3>
    <ul className="pt-2 flex flex-col gap-2">
      {item.items.map(ele => <Card key={ele.id} task={ele} onDelete={onDelete} />)}
    </ul>
  </div >
}

type CardProps = {
  task: string
}

function Card({ onDelete, task }: CardProps) {
  return <li className="bg-gray-100 px-2 py-1 h-8 flex justify-between items-center rounded-md">
    <p className="text-xs">{task.task}</p>
    <button className="text-xs cursor-pointer transition-all duration-300 hover:text-sm" onClick={() => onDelete(task.id)}>❌</button>
  </li>
}
export default App

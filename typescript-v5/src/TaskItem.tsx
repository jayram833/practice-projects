import { Task } from "./types"


const statusColors: { pending: string, inprogress: string, completed: string } = {
    pending: "text-red-500",
    inprogress: "text-yellow-500",
    completed: "text-green-500"
};

function TaskItem({ task }: { task: Task }) {
    return (
        <li className="flex items-center justify-between bg-pink-100 px-4 py-2 mb-2">
            <span>{task.task}</span>
            <span className={`px-4 ${statusColors[task.status]}`}>{task.status}</span>
            <button className="cursor-pointer bg-pink-800 text-white px-2 py-1 rounded-md">Delete</button>
        </li>
    )
}

export default TaskItem

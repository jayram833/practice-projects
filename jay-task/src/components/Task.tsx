import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

function Task({ task: { title, status, priority, category } }) {
    const [showActions, setShowActions] = useState(false)
    return <tr className="border-[0.5px]">
        <td className="p-2">{title}</td>
        <td>{status}</td>
        <td>{priority}</td>
        <td>{category}</td>
        <td className="cursor-pointer" onClick={() => setShowActions(!showActions)}><BsThreeDots />
            {showActions && <div className="flex flex-col items-start  pt-1 dark:bg-slate-950 border-[0.5px] z-1000 px-2 rounded-sm absolute">
                <button className="cursor-pointer dark:hover:bg-slate-800 w-full  border-gray-500  px-2 py-1">Delete</button>
                <button className="cursor-pointer dark:hover:bg-slate-800  border-gray-500  px-2 py-1">Edit</button>
            </div>}
        </td>

    </tr>
}

export default Task;
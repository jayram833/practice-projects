import { memo, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";

const Task = memo(function ({ task, isOpen, onToggleActions, onDeleteTask, onEditTask }) {
    const { title, status, priority, category, id } = task;
    return (
        <tr className="border-[0.5px]">
            <td className="p-2">{title}</td>
            <td>{status}</td>
            <td>{priority}</td>
            <td>{category}</td>
            <td>
                <BsThreeDots className="cursor-pointer" onClick={onToggleActions} />
                {isOpen && (
                    <div className="flex flex-col items-start mt-1 dark:bg-slate-950 border-[0.5px] z-50 bg-white rounded-sm absolute">
                        <button onClick={() => onDeleteTask(id)} className="cursor-pointer dark:hover:bg-slate-800 w-full border-gray-500 px-5 py-1 rounded-md hover:bg-slate-100 ">
                            Delete
                        </button>
                        <button onClick={() => onEditTask(task)} className="cursor-pointer dark:hover:bg-slate-800 w-full border-gray-500 px-5 py-1 rounded-md  hover:bg-slate-100">
                            Edit
                        </button>
                    </div>
                )}
            </td>
        </tr>
    );
})

export default Task;

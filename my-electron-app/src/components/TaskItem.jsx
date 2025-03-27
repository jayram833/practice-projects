import Button from "./Button";
import { FaTrash } from "react-icons/fa6";


function TaskItem({item,onDelete}) {
    const {id,title, description, status, priority} = item;


    const statusStyles={
        inProgress: "rgb(253, 188, 100)",
        pending:"rgb(232, 105, 125)",
        completed:"rgb(51, 211, 145)"
    }

    return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2 text-gray-800">{title}</td>
                <td className="px-4 py-2 text-gray-600 max-w-[150px] truncate overflow-hidden whitespace-nowrap">{description}</td>
                <td style={{backgroundColor:statusStyles[status]}} className="px-4 text-white py-2 font-medium">{status}</td>
                <td className="px-4 py-2 font-semibold">{priority}</td>
                <td className="pt-[10px] text-center">
                    <Button className="text-xl cursor-pointer text-red-600 flex items-center justify-center mx-auto" onClick={() => onDelete(id)}>
                        <FaTrash />
                    </Button>
                </td>
            </tr>
        )
}   

export default TaskItem

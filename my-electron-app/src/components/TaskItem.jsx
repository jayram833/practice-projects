import Button from "./Button";
import { FaTrash } from "react-icons/fa6";


function TaskItem({item,onDelete}) {
    const {id,title, description, status, priority} = item;

    const priorityStyles={
        low:"oklch(0.648 0.2 131.684)",
        medium:"oklch(0.828 0.189 84.429)",
        high:"oklch(0.577 0.245 27.325)"
    }


    return (
            <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2 text-gray-800">{title}</td>
                <td className="px-4 py-2 text-gray-600">{description}</td>
                <td className="px-4 py-2 font-medium text-blue-600">{status}</td>
                <td style={{color: priorityStyles[priority]}} className="px-4 py-2 font-semibold">{priority}</td>
                <td className="flex items-center justify-around pt-[10px]">
                    <Button className="text-xl cursor-pointer text-red-600" onClick={()=>onDelete(id)}>
                        <FaTrash />
                    </Button>
                </td>
            </tr>
        )
}   

export default TaskItem

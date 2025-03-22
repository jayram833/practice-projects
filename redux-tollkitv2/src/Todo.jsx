import { useDispatch } from "react-redux";
import { deleteTodo } from "./todoSlice";


function Todo({todoItem}) {
    const dispatch = useDispatch();

    function handleDelete(id){
        dispatch(deleteTodo(id));
    }

    return (
        <li className="bg-pink-200 rounded-md flex p-1.5 mt-1 justify-between">
           <span>{todoItem.text}</span>
           <button onClick={()=>handleDelete(todoItem.id)} className="cursor-pointer bg-pink-900 text-white px-1.5 py-0.5 rounded-md">Delete</button> 
        </li>
    )
}



export default Todo

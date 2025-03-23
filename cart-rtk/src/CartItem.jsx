import { FaTrashCan } from "react-icons/fa6";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function CartItem({item}) {
    const dispatch = useDispatch();

    function handleDeleteItem(id){
        dispatch(deleteItem(id))
    }

    return (
        <li className="flex justify-between items-center bg-green-200 px-4 py-2 mt-2 rounded-md">
            <span>{item.item}</span>
            <FaTrashCan onClick={()=>handleDeleteItem(item.id)} className="text-red-600 cursor-pointer "/>
        </li>
    )
}

export default CartItem

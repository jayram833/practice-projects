import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Todo({ todo, onDelete, onEdit }) {
  const { text, isCompleted, id } = todo;
  return (
    <li>
      <span className={`${isCompleted ? "completed" : ""}`}>{text}</span>
      <button title="Edit Item" onClick={() => onEdit(todo)} className="mt-3">
        <FaEdit />
      </button>
      <button title="Delete Item" onClick={() => onDelete(id)} className="mt-3">
        <MdDelete />
      </button>
    </li>
  );
}

export default Todo;

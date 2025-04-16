function Todo({item,onDelete,onEdit,mode}) {
    const colorCodes = {
        low: "lightGreen",
        medium: "lightYellow",
        hight: "lightRed"
    }
    return (
        <li onClick={()=>onEdit(item)} style={{backgroundColor: colorCodes[item.priority]}} className="w-90 px-3 py-1.5 rounded-md flex justify-between items-center">
            <span>{item.todo}</span>
            {mode==="add" ? 
            <button onClick={()=>onDelete(item.id)} className="bg-red-500 px-2 py-1 rounded-md cursor-pointer">Delete</button>: 
            <button onClick={()=>onDelete(item.id)} className="bg-red-500 px-2 py-1 rounded-md cursor-pointer">{mode==="add" ? "Delete" : "Edit"}</button>}
        </li>
    )
}

export default Todo

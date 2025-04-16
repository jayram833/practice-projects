import { useContext, useState } from "react"
import { TodosContext } from "./App"
import Todo from "./Todo";
function TodoList() {
   const {todos, setTodos, setInputText} = useContext(TodosContext);
   const [mode, setMode] = useState("add");

   function handleDeleteItem(itemId){
    setTodos( todos.filter(el=> el.id!==itemId));
   }

   function handleEditItem(item){
    setInputText(item.todo);
    setMode("edit")
   }

    return (
        <ul className="flex flex-col gap-2 overflow-x-scroll h-[500px]">
           {todos.map(item=> <Todo key={item.id} item={item} onDelete={handleDeleteItem} onEdit={handleEditItem} mode={mode}/>)} 
        </ul>
    )
}

export default TodoList

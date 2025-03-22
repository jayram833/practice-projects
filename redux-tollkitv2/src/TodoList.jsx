import { useSelector } from "react-redux";
import Todo from "./Todo";

function TodoList() {
    const todosItems = useSelector(state=> state.todo.todos);

    return (
        <ul className="w-100 mt-10">
           {todosItems.map(item=> <Todo key={item.id} todoItem={item}/>)} 
        </ul>
    )
}

export default TodoList

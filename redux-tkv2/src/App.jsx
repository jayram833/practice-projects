import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {addTodo, deleteTodo } from "./todoSlice";

function App() {
  const [inputText,setInputText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector(state=> state.todo.todos)

  function handleAdd(){
    const newItem = {id:Date.now(), inputText}
    dispatch(addTodo(newItem));
    setInputText("");
  }

  function handleDelete(id){
    dispatch(deleteTodo(id))
  }

  return (
    <div>
        <h1>Custom Hooks and react optimisations</h1>
        <input type="text"  placeholder="Enter Todo..." value={inputText} onChange={e=>setInputText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>

        <ul>
          {todos.map(item=> <li key={item.id}>{item.inputText} <button onClick={()=>handleDelete(item.id)}>Delete</button> </li>)}
        </ul>
    </div>
  )
}

export default App

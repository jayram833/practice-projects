import { useState } from "react"
import { useDispatch } from "react-redux";
import {addTodo} from "./todoSlice";


function AddTodoForm() {
    const [inputText, setInputText] = useState("");
   const dispatch =  useDispatch();

   function handleSubmit(e){
    e.preventDefault();
    dispatch(addTodo({id:Date.now(), text:inputText}));
    setInputText("");
   }

    return (
        <form onSubmit={handleSubmit} className="bg-lime-100 mt-5 p-5 gap-2 flex flex-col items-center rounded-xl">
            <h1 className="font-semibold text-2xl">Add Todo</h1>
            <div className="my-5">
                <input className="bg-white px-2 py-1 rounded-md focus:outline-none" type="text" placeholder="Read book..." value={inputText} onChange={(e)=>setInputText(e.target.value)}/>
                <button type="submit" className="bg-lime-400 px-3 py-1 cursor-pointer rounded-md">Add</button>
            </div>
        </form>
    )
}

export default AddTodoForm

import { useState } from "react"
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";

function AddItemForm() {
    const [inputText,setInputText] = useState("");
    const dispatch = useDispatch()

    function handleSumit(e){
        e.preventDefault();
        dispatch(addItem({id:Date.now(), item:inputText}));
        setInputText("");
    }

    return (
        <>
        <h1 className="text-2xl font-semibold">Add Item Form</h1>
        <form className="bg-green-300 p-5 w-[500px]" onSubmit={handleSumit}>   
            <input type="text" placeholder="Item..." value={inputText} onChange={e=>setInputText(e.target.value)} className="bg-green-50 focus:outline-none px-3 py-1.5 w-80"/>
            <button type="submit" className="bg-green-500 px-3 py-1.5 cursor-pointer">Add</button>
        </form>
        </>
    )
}

export default AddItemForm

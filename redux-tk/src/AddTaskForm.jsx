import { useState } from "react"
import { useDispatch } from "react-redux";
import {addTask } from "./taskSlice"

function AddTaskForm() {
    const [formData, setFormData] = useState({
        id:"",
        task:"",
        status:"",
    });

   const dispatch = useDispatch();


    function handleChange(e){
        const {name, value}=e.target;
        setFormData({...formData, [name]:value, id: Date.now()})
    }

    function handleAddTask(e){
        e.preventDefault();
        dispatch(addTask(formData))
        setFormData({
            id:"",
            task:"",
            status:"",
        })
    }

    return (
        <form onSubmit={handleAddTask}>
            <input type="text" placeholder="Add Task..." name="task" value={formData.task} onChange={handleChange}/>
            <select name="status" id="" onChange={handleChange} value={formData.status}>
                <option value="">Select Status</option>
                <option value="todo">Todo</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">completed</option>
            </select>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTaskForm

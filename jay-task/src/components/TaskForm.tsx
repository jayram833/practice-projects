import { FormEvent, useEffect, useState } from "react"
import { IoCloseOutline } from "react-icons/io5";

import { Task } from "../type";

function TaskForm({ setTaskForm, onAddTask, mode, tempData }) {
    const [formData, setFormData] = useState<Task>({
        title: "",
        status: "pending",
        priority: "high",
        category: "",
        id: Date.now()
    })

    function handleChange(e: FormEvent) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // form actions
        onAddTask(formData);
        setFormData({
            title: "",
            status: "pending",
            priority: "high",
            category: "",
            id: 1
        });
        setTaskForm(false)
    }

    function handleFormClose() {
        setTaskForm(false)
    }

    useEffect(() => {
        setFormData(tempData);
    }, [])

    return (
        <div className="fixed inset-0 bg-gray-400 bg-opacity-50 items-center backdrop-blur-sm flex justify-center">
            <form onSubmit={handleSubmit} className="flex bg-slate-100 dark:bg-slate-950 px-10 py-10 flex-col items-start gap-4 justify-center w-140 border rounded-xl relative m-2">

                <button className="absolute top-7 text-3xl transform-all duration-300 hover:scale-120 cursor-pointer right-7" onClick={handleFormClose}><IoCloseOutline /></button>

                <span className="pt-12">
                    <label htmlFor="title" className="font-semibold pr-2">Title : </label>
                    <input type="text" id="title" name="title" placeholder="Fix login issue..." onChange={handleChange} value={formData.title} className="dark:bg-slate-900 w-100 bg-white px-2 py-1 rounded-md focus:outline-none" />
                </span>

                <span>
                    <label htmlFor="status" className="font-semibold pr-2">Status : </label>
                    <select name="status" id="status" onChange={handleChange} className="border-[0.5px] border-gray-500 rounded-md px-2 py-1 focus:outline-none">
                        <option value="pending">Pending</option>
                        <option value="inprogress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </span>

                <span className="flex gap-1">
                    <label htmlFor="" className="font-semibold pr-2">Priority : </label>
                    <input type="radio" id="low" name="priority" value="low" checked={formData.priority === "low"} onChange={handleChange} />
                    <label htmlFor="low" className="pr-4">Low</label>
                    <input type="radio" id="medium" name="priority" value="medium" checked={formData.priority === "medium"} onChange={handleChange} />
                    <label htmlFor="medium" className="pr-4">Medium</label>
                    <input type="radio" id="high" name="priority" value="high" checked={formData.priority === "high"} onChange={handleChange} />
                    <label htmlFor="high">High</label>
                </span>

                <span>
                    <label htmlFor="category" className="font-semibold pr-2">Category : </label>
                    <select name="category" id="category" onChange={handleChange} className="border-[0.5px] border-gray-500 rounded-md px-2 py-1 focus:outline-none">
                        <option value="bug">Bug</option>
                        <option value="feature">Feature</option>
                        <option value="uiux">UI/UX</option>
                        <option value="performance">Performance</option>
                        <option value="testing">Testing</option>
                    </select>
                </span>
                {mode === "add" ? <button className="cursor-pointer dark:hover:bg-slate-800 self-center border-gray-500 border-[0.5px] rounded-md px-2 mt-4 py-1">Add Task</button> :
                    <button className="cursor-pointer dark:hover:bg-slate-800 self-center border-gray-500 border-[0.5px] rounded-md px-2 mt-4 py-1">Edit Task</button>}
            </form>
        </div>
    )
}

export default TaskForm

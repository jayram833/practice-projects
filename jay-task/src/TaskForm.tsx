import { FormEvent, useState } from "react"
import { Task } from "./type";

function TaskForm() {
    const [formData, setFormData] = useState<Task>({
        title: "",
        status: "pending",
        priority: "high",
        category: "",
        id: 1
    })

    function handleChange(e: FormEvent) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // form actions
        setFormData({
            title: "",
            status: "pending",
            priority: "high",
            category: "",
            id: 1
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title </label>
            <input type="text" id="title" name="title" placeholder="Fix login issue..." onChange={handleChange} value={formData.title} />

            <label htmlFor="status">Status</label>
            <select name="status" id="status" onChange={handleChange}>
                <option value="pending">Pending</option>
                <option value="inprogress">In Progress</option>
                <option value="completed">Completed</option>
            </select>

            <label htmlFor="">Priority</label>
            <input type="radio" id="low" name="priority" value="low" checked={formData.priority === "low"} onChange={handleChange} />
            <label htmlFor="low" >Low</label>
            <input type="radio" id="medium" name="priority" value="medium" checked={formData.priority === "medium"} onChange={handleChange} />
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="high" name="priority" value="high" checked={formData.priority === "high"} onChange={handleChange} />
            <label htmlFor="high">High</label>


            <label htmlFor="category">Category</label>
            <select name="category" id="category" onChange={handleChange}>
                <option value="bug">Bug</option>
                <option value="feature">Feature</option>
                <option value="uiux">UI/UX</option>
                <option value="performance">Performance</option>
                <option value="testing">Testing</option>
            </select>
            <button>Add Task</button>
        </form>
    )
}

export default TaskForm

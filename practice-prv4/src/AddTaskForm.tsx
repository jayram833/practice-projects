import { useState } from "react"

type SubmitProps = {
    onSubmit: () => void
}

type FormData = {
    id: string,
    task: string,
    category: string
}

function AddTaskForm({ onSubmit }: SubmitProps) {
    const [formData, setFormData] = useState<FormData>({
        id: "" + Date.now(),
        task: "",
        category: ""
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (!formData.task.length || !formData.category.length) return;
            onSubmit(formData);
            setFormData({
                id: "" + Date.now(),
                task: "",
                category: ""
            })
        }} className="mt-5 bg-lime-300 px-5 py-4 rounded-md flex gap-4">
            <input type="text" name="task" placeholder="Read book..." value={formData.task} onChange={handleChange} className="bg-white px-2 py-1 rounded-md focus:outline-none" />
            <select name="category" id="" value={formData.category} onChange={handleChange} className="bg-white px-2 py-1 rounded-md focus:outline-none">
                <option value="">Status</option>
                <option value="todo">Todo</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
            </select>
            <button className="bg-lime-100 hover:bg-lime-200 px-4 cursor-pointer py-1 rounded-md" type="submit">Add</button>
        </form>
    )
}

export default AddTaskForm

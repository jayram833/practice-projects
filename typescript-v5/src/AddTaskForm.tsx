import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "./types";

function AddTaskForm({ onAddTask }) {
    const [formData, setformData] = useState<Task>({
        task: "",
        id: 1,
        status: "pending"
    })

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onAddTask(formData);
        setformData({ task: "", id: formData.id + 1, status: "pending" });
    }

    return (
        <form onSubmit={handleSubmit} className="bg-pink-400 w-100 flex flex-col gap-5 px-5 py-5 items-left rounded-md">
            <div>
                <label htmlFor="task">Task: </label>
                <input className="bg-white focus:outline-none w-70 rounded-md px-2 py-1" name="task" type="text" placeholder="Task..." id="task" value={formData.task} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="task">Status: </label>
                <select onChange={handleChange} name="status" id="task" className="bg-white focus:outline-none rounded-md px-2 py-1">
                    <option value="">Select</option>
                    <option value="pending">Pending</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button type="submit" className="cursor-pointer self-center bg-pink-100 rounded-md px-4 w-50 py-1">Add</button>
        </form>
    )
}

export default AddTaskForm

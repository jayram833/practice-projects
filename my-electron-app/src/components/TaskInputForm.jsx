import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { FormModalContext } from "../App";
import Button from "./Button";

function TaskInputForm() {
    const { toggleFormModal } = useContext(FormModalContext);
    const [tempData, setTempData] = useState({
        title: "",
        description: "",
        status: "",
        priority: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setTempData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e){
        e.preventDefault();
        const result = await window.electron.invoke("add-task",{id:Date.now(), ...tempData});
        console.log(result);

        setTempData({
            title: "",
            description: "",
            status: "",
            priority: "",
        });
        toggleFormModal()
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50">
            <form onSubmit={handleSubmit} className="bg-white relative flex gap-4 flex-col rounded-xl py-10 pt-15 px-8 border-[1px] border-gray-300">
                <AiOutlineClose className="absolute right-8 top-8 hover:scale-110 cursor-pointer text-2xl" onClick={toggleFormModal} />
                <h3 className="font-semibold text-2xl">Add New Task</h3>

                {/* Title Input */}
                <span>
                    <label htmlFor="title" className="block pb-2">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={tempData.title}
                        onChange={handleChange}
                        placeholder="Enter Task Title"
                        className="bg-white rounded-md w-120 border-[.5px] hover:bg-gray-50 border-gray-400 focus:outline-blue-600 px-4 py-1.5 focus:outline-[0.5px]"
                    />
                </span>

                {/* Description Input */}
                <span>
                    <label htmlFor="description" className="block pb-2">Task Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={tempData.description}
                        placeholder="Description"
                        className="bg-white rounded-md w-120 border-[.5px] hover:bg-gray-50 border-gray-400 focus:outline-blue-600 px-4 py-1.5 focus:outline-[0.5px]"
                    ></textarea>
                </span>

                {/* Status Dropdown */}
                <span>
                    <label htmlFor="status" className="block pb-2">Status:</label>
                    <select
                        name="status"
                        id="status"
                        className="bg-white rounded-md w-120 border-[.5px] hover:bg-gray-50 border-gray-400 focus:outline-blue-600 px-4 py-1.5 focus:outline-[0.5px]"
                        value={tempData.status}
                        onChange={handleChange}
                    >
                        <option value="">Select Status</option>
                        <option value="pending">Pending</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </span>

                {/* Priority Radio Buttons */}
                <span className="mb-5">
                    <label htmlFor="priority" className="block pb-2">Priority:</label>
                    
                    <span className="pr-5 space-x-1.5">
                        <input 
                            type="radio" 
                            name="priority" 
                            id="high" 
                            value="high" 
                            checked={tempData.priority === "high"} 
                            onChange={handleChange} 
                        /> 
                        <label htmlFor="high">High</label>
                    </span>

                    <span className="pr-5 space-x-1.5">
                        <input 
                            type="radio" 
                            name="priority" 
                            id="medium" 
                            value="medium" 
                            checked={tempData.priority === "medium"} 
                            onChange={handleChange} 
                        /> 
                        <label htmlFor="medium">Medium</label>
                    </span>

                    <span className="pr-5 space-x-1.5">
                        <input 
                            type="radio" 
                            name="priority" 
                            id="low" 
                            value="low" 
                            checked={tempData.priority === "low"} 
                            onChange={handleChange} 
                        /> 
                        <label htmlFor="low">Low</label>
                    </span>
                </span>

                <Button btnType="submit" className="cursor-pointer px-3 py-1.5 rounded-4xl w-25 bg-blue-600 text-white hover:bg-blue-500">
                    Add
                </Button>
            </form>
        </div>
    );
}

export default TaskInputForm;

import { useContext } from "react"
import { TasksContext } from "../App";
import TaskItem from "./TaskItem";

function TaskList() {
    const {tasks} = useContext(TasksContext);


    async function handleDeleteTask(taskId){
        console.log(taskId)
      try {
        const result = await window.electron.invoke("delete-task", taskId);
            if (result.success) {
                console.log("Task deleted:", result.tasks);
                setTasks(result.tasks); 
            } else {
                console.error(result.message);
            }
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    return (
        <div>
            <table className="w-full max-w-[1200px] mx-auto border-collapse bg-white shadow-md rounded-lg">

                <thead>
                    <tr className="bg-gray-100 text-left text-gray-700 border-b border-gray-300">
                    <th className="px-4 py-2 font-semibold">Title</th>
                    <th className="px-4 py-2 font-semibold">Description</th>
                    <th className="px-4 py-2 font-semibold">Status</th>
                    <th className="px-4 py-2 font-semibold">Priority</th>
                    <th className="px-4 py-2 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((item) => (
                    <TaskItem key={item.id} item={item} onDelete={handleDeleteTask} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList

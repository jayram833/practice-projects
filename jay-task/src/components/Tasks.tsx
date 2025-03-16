import { memo, useState } from "react"
import Task from "./Task"


const Tasks = memo(function ({ tasks, onDeleteTask, onEditTask }) {
    const [openTaskId, setOpenTaskId] = useState(null);
    const handleToggleActions = (taskId) => {
        setOpenTaskId((prev) => (prev === taskId ? null : taskId));
    }

    return (
        <div className="overflow-x-auto overflow-hidden my-5 border-[0.4px] rounded-xl">
            <table className=" w-full border-collapse rounded-md">
                <thead>
                    <tr className="border-[0.1px] text-left">
                        <th className="p-2">Title</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => <Task
                        key={task.id}
                        task={task}
                        isOpen={openTaskId === task.id}
                        onToggleActions={() => handleToggleActions(task.id)}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                    />)}
                </tbody>
            </table>
        </div>
    )
})



export default Tasks

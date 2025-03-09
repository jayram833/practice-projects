import { memo } from "react"
import Task from "./Task"


const Tasks = memo(function ({ tasks }) {
    console.log("red")
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
                    {tasks.map(task => <Task key={task.id} task={task} />)}
                </tbody>
            </table>
        </div>
    )
})



export default Tasks

import TaskItem from "./TaskItem";
import { Task } from "./types";

function TaskList({ tasks }: { tasks: Task[] }) {
    return (
        <ul className="w-140">
            {tasks.map((task: Task) => {
                return <TaskItem key={task.id} task={task} />
            })}
        </ul>
    )
}

export default TaskList

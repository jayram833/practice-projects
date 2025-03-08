function Tasks({ tasks }) {
    return (
        <div className="overflow-x-auto overflow-hidden  border-[0.4px] rounded-xl">
            <table className=" w-full border-collapse rounded-md">
                <thead>
                    <tr className="border-[0.1px]">
                        <th>Title</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Category</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => <Task key={task.id} task={task} />)}
                </tbody>
            </table>
        </div>
    )
}

function Task({ task: { title, status, priority, category } }) {
    return <tr className="border-[0.5px]">
        <td>{title}</td>
        <td>{status}</td>
        <td>{priority}</td>
        <td>{category}</td>
    </tr>
}

export default Tasks

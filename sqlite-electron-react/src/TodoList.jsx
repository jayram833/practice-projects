function TodoList({todos,onDeleteTodo}) {


    return (
        <ul className="mt-4 space-y-2">
        {todos.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 border rounded-lg ${
              task.completed ? "bg-green-100 line-through" : "bg-gray-50"
            }`}
          >
            <span className="text-lg">{task.todo}</span>
            <div className="space-x-2">
              {/* Toggle button */}
              <button className="text-green-500 cursor-pointer hover:text-green-600">
                ✅
              </button>
              {/* Delete button */}
              <button onClick={()=>onDeleteTodo(task.id)} className="text-red-500 cursor-pointer hover:text-red-600">
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    )
}

export default TodoList

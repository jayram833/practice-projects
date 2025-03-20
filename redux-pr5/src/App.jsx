import { createContext, useContext, useState } from "react";



const TodoContext = createContext();

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
      comments: [
        { id: 1, text: "Start with the docs!", likes: 2 },
        { id: 2, text: "Build small projects.", likes: 5 }
      ]
    },
    {
      id: 2,
      title: "Practice Redux",
      completed: false,
      comments: [
        { id: 1, text: "Understand actions.", likes: 1 }
      ]
    }
  ]);

  function handleLikes(commentItem,todoItemId){
    setTodos(todoItems=> todoItems.map((todo)=> todo.id===todoItemId ? {...todo, comments: todo.comments.map(comm=> comm.id===commentItem.id ? {...comm, likes:comm.likes+1}:comm)}: todo))
  }

  function handleComplete(todoItem){
    setTodos(todos.map(item=> item.id===todoItem.id ? {...item, completed:!item.completed}:item))
  }

  function handleDelete(itemID){
    setTodos(todoItems=> todoItems.filter(item=> item.id!==itemID))
  }
  
  function handleSubmit(){}

  return (
    <TodoContext.Provider value={{todos,setTodos,handleLikes,handleDelete,handleComplete}}>
    <div className="bg-blue-200 flex flex-col items-center h-screen">
        <h1 className="text-4xl text-center font-semibold">Todo</h1>
        <div className="w-[600px]">
          {todos.map(todoItem=> <TodoItem todoItem={todoItem} key={todoItem.id}/>)}
        </div>
    </div>
    </TodoContext.Provider>
  )
}

function AddTodoForm(){
  return <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Todo..." />
    <label htmlFor="completed">Completed</label>
    <input type="checkbox" name="completed" id="completed" checked={false}/>
    
  </form>
}

function TodoItem({todoItem}){
  const {handleComplete,handleDelete}=useContext(TodoContext)
  return <div className="flex gap-2 bg-blue-400 justify-around rounded-md mt-2 p-2">
    <h3>{todoItem.title}</h3>
    <div>
    <label htmlFor="completed">Completed</label>
    <input type="checkbox" name="completed" id="completed" checked={todoItem.completed} onChange={()=>handleComplete(todoItem)}/>
    </div>
    <div>
    {todoItem.comments.map(commentItem=> <Comment key={commentItem.id} todoItemId={todoItem.id} commentItem={commentItem}/>)}
    </div>
    <button className="cursor-pointer" onClick={()=>handleDelete(todoItem.id)}>❌</button>
  </div>
}

function Comment({commentItem,todoItemId}){
  const {handleLikes} = useContext(TodoContext)
  return <div className="flex bg-lime-100 mt-1 text-sm px-2 rounded-md">
    <p className="pr-5">{commentItem.text}</p>
    <button onClick={()=>handleLikes(commentItem,todoItemId)} className="cursor-pointer pr-1">👍🏻</button><span>{commentItem.likes}</span>
  </div>
}

export default App

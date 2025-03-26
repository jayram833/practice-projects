import { useDispatch, useSelector } from "react-redux";
import {deleteTask} from "./taskSlice";

function Tasks() {
    const tasksList = useSelector(state=> state.task.tasks);
    const dispatch = useDispatch()

    function handleDelete(id){
        dispatch(deleteTask(id))
    }
    return (
        <ul>
            {tasksList.map(t=> <li key={t.id}>{t.task} {t.status} <button onClick={()=>handleDelete(t.id)}>Delete</button> </li>)}
        </ul>
    )
}


export default Tasks

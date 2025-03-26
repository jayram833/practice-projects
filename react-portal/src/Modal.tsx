import { createPortal } from "react-dom"

function Modal() {
    return createPortal(
        <div>
            <input type="text" placeholder="Enter Task..." />
            <select name="" id="">
                <option value="">Select Status</option>
                <option value="todo">Todo</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
        </div>,
        document.querySelector(".modal-root")
    )
}

export default Modal


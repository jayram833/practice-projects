import { useState } from "react";

function Accordion({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    function handleToggle() {
        setIsOpen(!isOpen)
    }
    const { title, description } = item;
    return <div className="max-w-[600px] w-[600px] py-5 border">
        <div className="flex justify-between">
            <h1>{title}</h1> <button className="cursor-pointer" onClick={handleToggle}>{isOpen ? "🔽" : "▶️"}    </button>
        </div>
        {isOpen && <p>{description}</p>}
    </div>
}

export default Accordion  
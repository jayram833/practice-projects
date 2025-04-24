import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-end items-center bg-indigo-600">
            <input type="text" placeholder="search..." className="bg-white w-80 rounded-md px-2 py-2 focus:outline-none focus:w-[50%] transition-all duration-200" />
            <ul className="flex gap-4 p-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

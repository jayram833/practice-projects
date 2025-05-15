import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex justify-end px-2 bg-blue-400 py-2">
            <ul className="flex gap-5">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

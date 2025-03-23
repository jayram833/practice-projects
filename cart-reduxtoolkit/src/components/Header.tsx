import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"

function Header() {
    return (
        <nav>
            <ul className="flex justify-between px-5 items-center bg-green-500">
                <li>
                    <NavLink to="/"><img src={logo} alt="logo" className="h-[80px]" /></NavLink>
                </li>
                <div className="flex justify-between gap-5">
                    <li >
                        <NavLink className="bg-green-300 px-3 rounded-md py-1.5 hover:bg-green-400 transition-all duration-200" to="/cart">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink className="bg-green-300 px-3 rounded-md py-1.5  hover:bg-green-400 transition-all duration-200" to="/product">Product</NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Header

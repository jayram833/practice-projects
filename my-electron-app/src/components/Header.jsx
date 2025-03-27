import { useContext } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonSharp } from "react-icons/io5";
import { ThemeContext } from "../App";


function Header() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <header className="flex justify-between p-5 bg-white border-b border-gray-200">
            <nav className="flex">
                <h1 className="text-4xl text-center text-gray-900 font-semibold">Welcome to first React Electron Project</h1>
            </nav>
                <div className="flex items-center text-xl">
                    {theme==="dark" ? <FiSun onClick={toggleTheme} className=" cursor-pointer text-gray-700"/> : <IoMoonSharp onClick={toggleTheme} className=" cursor-pointer text-gray-700"/>}
                </div>
        </header>
    )
}

export default Header

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";


function Navbar({ theme, setTheme }) {

    function handleThemeToggle() {
        setTheme(prev => prev === "light" ? "dark" : "light")
    }

    return (
        <nav className="flex justify-between px-5 py-4 border-b-[1px]">
            <h1>Jay's Task Manager</h1>
            <button className="cursor-pointer text-2xl" onClick={handleThemeToggle}>{theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}</button>
        </nav>
    )
}
export default Navbar

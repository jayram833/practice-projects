function NavBar({onCartOpen}) {
    return (
        <nav className="bg-lime-400 flex justify-end p-5">
            <button onClick={onCartOpen} className="mr-5 cursor-pointer transition-all duration-200 text-gray-700 hover:bg-lime-100 px-4 py-1 bg-lime-200 rounded-md">Cart</button>
        </nav>
    )
}

export default NavBar

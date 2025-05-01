function Navbar() {
    return (
        <nav className="bg-green-600 text-white flex justify-between p-4">
            <h1 className="font-semibold text-4xl text-center">Govardhan Dairy</h1>
            <ul className="flex items-center gap-2">
                <li className="active:bg-green-700 hover:bg-green-700 cursor-pointer py-1 px-2 rounded-sm">Home</li>
                <li className="active:bg-green-700 hover:bg-green-700 cursor-pointer py-1 px-2 rounded-sm">Farmers</li>
                <li className="active:bg-green-700 hover:bg-green-700 cursor-pointer py-1 px-2 rounded-sm">Milk Collection</li>
                <li className="active:bg-green-700 hover:bg-green-700 cursor-pointer py-1 px-2 rounded-sm">Reports</li>    
            </ul>      
        </nav>
    )
}

export default Navbar

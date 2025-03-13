function Button({ children }) {
    return (
        <button className="hover:bg-blue-600 hover:text-white cursor-pointer border-[0.5px] rounded-md border-blue-500 px-1.5 py-0.5 m-2">
            {children}
        </button>
    )
}

export default Button

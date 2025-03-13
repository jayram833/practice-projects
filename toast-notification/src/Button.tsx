function Button({ children, onClick }) {
    return (
        <button onClick={onClick} className={`text-xs transition-all duration-200 border-[0.5px] rounded-sm px-2 py-1 hover:bg-pink-200 cursor-pointer`}>
            {children}
        </button>
    )
}

export default Button

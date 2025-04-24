function Button({ label, onClick }) {
    return (
        <button onClick={onClick} className="bg-lime-400  rounded-md cursor-pointer px-4">
            {label}
        </button>
    )
}

export default Button

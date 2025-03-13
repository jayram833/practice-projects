function Button({ children, className }) {
    return (
        <button className={`cursor-pointer ${className}`}>
            {children}
        </button>
    )
}

export default Button

function Button({children, onClick, className, btnType}) {
    return (
        <button type={btnType || "button"} className={className} onClick={onClick}>
            {children}
        </button>
    )
}
export default Button

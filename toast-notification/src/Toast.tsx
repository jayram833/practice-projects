function Toast({ children, className, style }) {
    return (
        <div
            className={`${className} fixed right-5 transition-all rounded-md duration-500 ease-out transform opacity-100 scale-100 hover:scale-105 hover:opacity-90`}
            style={{ ...style, zIndex: 1000, width: "250px", padding: "10px" }}
        >
            <p className="text-white">{children}</p>
        </div>
    );
}

export default Toast;

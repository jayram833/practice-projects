function Button({onClick, label,currentPage, page}) {
    return (
<button 
  className={`px-2 rounded-xs cursor-pointer ${currentPage === label ? "bg-red-400" : "bg-blue-400"}`} 
  onClick={() => onClick(page)}
>
  {label}
</button>

    )
}

export default Button

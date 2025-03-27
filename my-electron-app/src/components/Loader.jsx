function Loader({text}) {
    return (
<div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-gray-600 text-sm">{text}</p>
    </div>
    )
}

export default Loader

import { useEffect, useState } from "react"

function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (progress <= 90) {
                setProgress(progress + 10)
            }
        }, 1000)
        return () => clearTimeout(timer);
    }, [progress])

    return (
        <div className="my-30 mx-10">
            <h1>Progress Bar</h1>
            <div className="h-3 w-[500px] bg-gray-100 rounded-md">
                <div className={`h-3 text-[8px] transition-w duration-500 text-white bg-blue-500  rounded-md`} style={{ width: `${progress}%` }}>
                    <span className="pl-2">{progress >= 10 && progress}%</span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar

type ToastProps = {
    data: string,
    bgColor: string
}

function Toast({ data, bgColor }: ToastProps) {
    return (
        <div className={`w-[300px] absolute right-10 bottom-10 h-[50px] flex justify-center rounded-sm items-center ${bgColor}`}>
            <p className="">{data}</p>
        </div>
    )
}

export default Toast

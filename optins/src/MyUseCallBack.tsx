import { memo, useCallback, useState } from "react"

function MyUseCallBack() {
    const [count, setCount] = useState(0);

    const handleIncrement = useCallback(() => {
        setCount(prevCnt => prevCnt + 1)
    }, [])

    return (
        <div>

            <Button handleClick={handleIncrement} />
            <p>Count:{count}</p>

        </div>
    )
}
const Button = memo(function ({ handleClick }) {
    console.log("button rendered")
    return <button onClick={handleClick}>Click me</button>
})

export default MyUseCallBack

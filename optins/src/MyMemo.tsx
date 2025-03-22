import { memo, useState } from "react"

function MyMemo() {
    const [count, setCount] = useState(0);

    function handleInc() {
        setCount(prevCount => prevCount + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={handleInc}>Inc</button>
            <ChildComponent myName="Jayram" />
        </div>
    )
}


const ChildComponent = memo(function ({ myName }) {
    console.log("rendered")
    return <p>{myName}</p>
})

export default MyMemo

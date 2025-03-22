import { useMemo, useState } from "react"

function MyUseMemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(2);
    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Count:{count}</button>
            <button onClick={() => { setNumber(number + 1) }}>Square:{number}</button>
            <ExpensiveComp number={number} />

        </div>
    )
}

function ExpensiveComp({ number }) {

    function calcSquare(num) {
        console.log("calculating square");
        return num * num;
    }

    const square = useMemo(() => calcSquare(number), [number])

    return <p>Square:{square}</p>
}

export default MyUseMemo

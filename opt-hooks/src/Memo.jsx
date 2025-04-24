import { memo, useState } from "react"

function Memo() {
    const [count, setCount]=useState(0);
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Inc: {count}</button>
            <Child myName="Jayram" />
        </div>
    )
}

const Child = memo( function({myName}){
    console.log("Child re-rendered")
    return <p>{myName}</p>
})

export default Memo

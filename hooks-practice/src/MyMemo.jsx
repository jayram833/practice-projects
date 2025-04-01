import { memo, useState } from "react"

function MyMemo() {
    const [count, setCount] = useState(0);
    const [myName, setMyName] = useState("Jayram")

    function handleClick(){
        setCount(count+1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={handleClick}>Increase</button>
            <MyName myName={myName}/>
        </div>
    )
}

const  MyName =memo(function ({myName}){
    console.log("rendered")
    return <h3>{myName}</h3>
})

export default MyMemo

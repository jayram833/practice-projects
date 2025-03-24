import { memo, useCallback, useState } from "react"

function MyUseCallback() {
    const [count, setCount] = useState(0);
    const [num,setNum] = useState(2);

    const handleIncrementNumber = useCallback(function(){
        console.log("rendered")
        setNum(prev=> prev+2);
    },[])

    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Inc Count : {count}</button>
            <h2>Number is {num}</h2>
            <button onClick={handleIncrementNumber}>Inc Number</button>
            <Child incNum={handleIncrementNumber}/>
        </div>  
    )
}

const Child =memo( function({incNum}){
    console.log("rendered child");
    return <button onClick={incNum}>Increment in Child</button>
})

export default MyUseCallback

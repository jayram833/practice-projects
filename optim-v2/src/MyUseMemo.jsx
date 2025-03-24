import { useMemo, useState } from "react"

function MyUseMemo() {
    const [count,setCount] = useState(0);
    const [num,setNum] = useState(2);

    function calcSquare(value){
        console.log("calculating square");
        return value*value;
    }

    const sqr = useMemo(()=> calcSquare(num),[num]);
    
    return (
        <div>
            <button onClick={()=> setCount(count+1)}>Count: {count}</button>
            <button onClick={()=> setNum(num+1)}>Square: {num} : {sqr}</button>
        </div>
    )
}

export default MyUseMemo

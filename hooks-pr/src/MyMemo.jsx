import { memo, useState } from "react"

function MyMemo() {
    const [count,setCount] = useState(0);
    return (
        <div>   
            <h2>{count}</h2>

            <button className="cursor-pointer border-[1px] bg-gray-300 px-3 rounded-md" onClick={()=> setCount(count+1)}>Inc</button>
            <MyName firstName="Jayram"/>
        </div>
    )
}


const MyName = memo(function({firstName}){
    console.log("Rendered")
    return <p>{firstName}</p>
})

export default MyMemo

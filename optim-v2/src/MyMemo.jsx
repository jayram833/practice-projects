import { memo, useState } from "react"

function MyMemo() {
    const [count ,setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <ChildComp myName="Jayram"/>
        </div>
    )
}

const ChildComp =memo(function ({myName}){
    console.log("rendered");
    return <h1>Childten Component {myName}</h1>
})

export default MyMemo

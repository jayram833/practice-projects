import { useEffect } from "react"

function Dashboard({setTitle}) {
    for (let index = 0; index < 1000000000; index++) {
        
    }

    useEffect(()=>{

        setTitle("Dashboard")
    },[])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard

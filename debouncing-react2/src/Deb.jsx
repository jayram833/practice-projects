import { useEffect, useState } from "react";
import data from "./users.json";

function Deb() {


    return (
        <div className="flex justify-center mt-5">
            <input type="text" placeholder="Search..." className="w-[400px] px-2 py-1 rounded-md focus:outline-none bg-blue-50" value={query} onChange={e=>setQuery(e.target.value)}/>
        </div>
    )
}


function Result(){
    return <div></div>
}

export default Deb

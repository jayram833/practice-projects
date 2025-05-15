import { useState } from "react"
import useFetch from "./useFetch"

const url = "https://dummyjson.com/posts/"

function Posts() {
    const [id, setId] = useState(1);
    const [data, loading, error] = useFetch(`${url}${id}`);
    console.log(data)


    return (
        <div>

        </div>
    )
}

export default Posts

import { useState } from "react";
import useFetch from "./useFetch";


function Post() {
    const [postData, setPostData] = useState({ username: 'john_doe', email: 'john@example.com', password: 'pass123' })
    const [data, error, loading] = useFetch(`https://fakestoreapi.com/users`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(postData)
    },

    );
    function handlePost() {
        setPostData({ ...postData, username: 'john_koli' })
    }

    return (
        <div>
            <button onClick={() => handlePost()}>Post Data</button>
        </div>
    )
}

export default Post

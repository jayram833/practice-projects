import { lazy } from "react"


const Posts = lazy(() => import("../Posts"))

function Post() {
    return (
        <div>
            <h1>Post</h1>
            <Posts />
        </div>
    )
}

export default Post

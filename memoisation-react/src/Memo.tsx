import { memo } from "react"

const Memo = memo(function ({ myName }) {
    console.log("rendered")
    return (
        <div>
            <h1>{myName}</h1>
        </div>
    )
})

export default Memo

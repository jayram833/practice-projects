import { forwardRef, memo } from "react"

const Child = memo(forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} placeholder={props.placeholder} />
        </div>
    )
}))

export default Child

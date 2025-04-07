import { memo, useCallback, useState } from "react";

function MyUseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Button clicked");
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Inc: {count}</button>
            <Button onHandleClick={handleClick} />
        </div>
    );
}

const Button = memo(function ({ onHandleClick }) {
    console.log("rendered");
    return (
        <button
            className="cursor-pointer border-[1px] bg-gray-300 px-3 rounded-md"
            onClick={onHandleClick}
        >
            Inc
        </button>
    );
});

export default MyUseCallback;

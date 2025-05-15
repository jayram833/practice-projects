import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : initialValue;
        } catch (e) {
            console.log("Error reading localstorage", e);
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));

        } catch (e) {
            console.log("Error setting localstorage:", e);
        }
    }, [key, value]);

    return [value, setValue]
}

export default useLocalStorage;
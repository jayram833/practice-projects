import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.log("Failed to get value from localstorage", e.message);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue))
        } catch (e) {
            console.log("Failed to stored value from localstorage", e.message);
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue];
}

export default useLocalStorage;


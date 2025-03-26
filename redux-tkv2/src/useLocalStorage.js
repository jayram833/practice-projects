import { useEffect, useState } from "react"


const useLocalStorage = function (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.log("Error getting value from local storage");
            return initialValue;
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem(key, storedValue);
        } catch (e) {
            console.log("Error setting local storage value");
        }
    }), [storedValue, key]

    return [storedValue, setStoredValue];
}

export default useLocalStorage;
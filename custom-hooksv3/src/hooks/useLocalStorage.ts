import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (e) {
            console.log(e);
            return initialValue;
        }
    })


    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (e) {
            console.log("Error while writing to local storage", e);
        }
    }, [storedValue, key]);

    return [storedValue, setStoredValue];

}

export default useLocalStorage;
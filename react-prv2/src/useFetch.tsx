import { useEffect, useState } from "react";

interface User {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

function useFetch(url: string) {
    const [result, setResult] = useState<User[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true)
    async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Http Error")
            const { data } = await response.json();
            setResult(data)
        } catch (e: Error) {
            setError(e.message);
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return { result, error, loading }
}

export default useFetch;
import { useEffect, useState } from "react";

function useFetch(url: string) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function fetchData() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network Error!");
            const data = await response.json();
            setResult(data);
            return data;
        } catch (e) {
            console.log(e);
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return [result, error, loading];

}


export default useFetch;
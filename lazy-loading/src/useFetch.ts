import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function getData() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network error");
            const result = await response.json();
            setData(result);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [url]);

    return [data, loading, error];

}
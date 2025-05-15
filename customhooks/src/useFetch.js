import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("network error");
            const result = await response.json();
            setData(result);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [url]);

    return [data, loading, error];

}

export default useFetch;
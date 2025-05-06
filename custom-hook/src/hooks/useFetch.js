import { useEffect, useState } from "react";

function useFetch(url) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function getData() {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network error");
            const { products } = await response.json();
            setResult(products);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [url]);

    return [result, loading, error];

}

export default useFetch;
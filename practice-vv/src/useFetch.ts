import { useEffect, useState } from "react"

function useFetch(url: string, options = {}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);


    async function fetchData() {
        try {
            const response = await fetch(url, options);
            if (!response.ok) throw new Error("HTTP Error! Status:", response.status);
            const result = await response.json();
            setData(result);
        } catch (e) {
            if (e.name !== "AbortError") {
                setError(e.message)
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!url) return;
        const controller = new AbortController();
        const signal = controller.signal;

        fetchData();

        return () => controller.abort();
    }, [url, JSON.stringify(options)])

    return [data, error, loading];
}

export default useFetch

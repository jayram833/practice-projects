import { useEffect, useState } from "react"

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const getData = async function () {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Network Error")
            const res = await response.json();
            console.log(res)
            setData(res);
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData(url);
    }, [url]);
    return { data, loading, error };
}

export default useFetch;

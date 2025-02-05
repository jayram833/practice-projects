import { useEffect, useRef, useState } from "react";

export default function usePage(url, pageNum) {
  const [pageData, setPageData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const cache = useRef({});

  useEffect(() => {
    async function getData() {
      try {
        if (cache.current[pageNum]) {
          setPageData(cache.current[pageNum]);
          return;
        }

        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");

        const { data } = await response.json();
        cache.current[pageNum] = data;
        setPageData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url, pageNum, pageData]);

  return { pageData, error, loading };
}

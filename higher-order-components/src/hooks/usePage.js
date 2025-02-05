import { useEffect, useState } from "react";

export default function usePage(url) {
  const [pageData, setPageData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch");
        const { data } = await response.json();

        setPageData(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [url]);

  return { pageData, error, loading };
}

import { useState, useEffect } from "react";

const URL = `https://fakestoreapi.com/products?search=`;

function useApi(query) {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      if (!query.length) return;
      setLoading(true);
      try {
        const response = await fetch(`${URL}${query}`);
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setResult(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      getProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return { result, loading, error };
}

export default useApi;

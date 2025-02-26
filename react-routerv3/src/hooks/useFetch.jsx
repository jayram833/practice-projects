import { useEffect, useState } from "react";

export default function useFetch(url = "https://reqres.in/api/users?delay=3") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function getData() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network issue");
      const { data } = await response.json();
      setData(data);
    } catch (e) {
      console.error(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return { data, loading, error };
}

import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    if (!response.ok) throw new Error(`HTTP Error: ${response.error}`);
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

export default function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 30000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>React Query</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.id}. {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

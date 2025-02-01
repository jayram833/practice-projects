import { useEffect, useState } from "react";

const URL = `https://fakestoreapi.com/products?search=`;

export default function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function getProducts() {
      if (!query.length) return;
      try {
        const response = await fetch(`${URL}${query}`);
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();
        setResult(data);
      } catch (e) {
        console.error(e);
      }
    }

    const timer = setTimeout(() => {
      getProducts();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {result.length > 0 &&
          result.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

function ProductCard({ product }) {
  const { image: path, title, description, price } = product;
  return (
    <div className="product">
      <img src={path} alt="" />
      <p>{title}</p>
      <p className="price">₹ {price}</p>
      {/* <p>{description}</p> */}
    </div>
  );
}

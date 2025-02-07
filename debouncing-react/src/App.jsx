import { useState } from "react";
import useApi from "./useApi";

export default function App() {
  const [query, setQuery] = useState("");
  const { result, loading, error } = useApi(query);

  return (
    <div>
      <h1>Products</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
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
      <img src={path} alt={title} />
      <p>{title}</p>
      <p className="price">₹ {price}</p>
      {/* <p>{description}</p> */}
    </div>
  );
}

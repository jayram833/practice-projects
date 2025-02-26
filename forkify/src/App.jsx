import { useState } from "react";
import useFetchRecipe from "./hooks/useFetchRecipe";
import Navbar from "./components/Navbar";

const apiURL = import.meta.env.VITE_API_URL.trim();
const apiKey = import.meta.env.VITE_API_KEY.trim();

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = useFetchRecipe(`${apiURL}${apiKey}tea`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <Navbar />
      <h1>Forkify</h1>
    </div>
  );
}

export default App;

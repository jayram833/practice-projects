import { BrowserRouter, Routes, Route } from "react-router-dom"
// http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`


import useFetch from "./hooks/useFetch";
import Home from "./Home";
import Navbar from "./Navbar";
import Favorites from "./Favorites";
import { createContext, useState } from "react";


const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const MoviesContext = createContext({})

function App() {
  const [query, setQuery] = useState("");
  const [result, error, loading] = useFetch(`${apiUrl}/?apikey=${apiKey}&s=shala`);

  return (
    <div>
      <MoviesContext.Provider value={{ result, error, loading, setQuery }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </MoviesContext.Provider>
    </div>
  )
}

export { MoviesContext };
export default App

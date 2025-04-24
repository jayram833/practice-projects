import { useContext } from "react";
import { MoviesContext } from "./App"
import MovieCard from "./MovieCard";

function Home() {
    const { result, loading } = useContext(MoviesContext);
    return (
        <div className="grid grid-cols-4 gap-4">
            {loading && <p>Loading...</p>}
            {result.Search && result.Search.map(mov => <MovieCard key={mov.imdbID} mov={mov} />)}
        </div>
    )
}

export default Home

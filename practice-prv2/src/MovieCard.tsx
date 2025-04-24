import heart from "./assets/heart.png";
import heartred from "./assets/heartred.png";

function MovieCard({ mov }) {
    return (
        <div className="border-[0.5px] rounded-md flex flex-col items-center justify-center">
            <img src={mov.Poster} alt="Poster" className="w-[120px]" />
            <h3 className="font-semibold">{mov.Title}</h3>
            <p className="text-sm">Year {mov.Year}</p>
            <img src={heartred} alt="favorite icon" className="w-7" />
        </div>
    )
}

export default MovieCard

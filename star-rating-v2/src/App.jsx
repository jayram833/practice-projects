import { useState } from "react";
import star1 from "./assets/star-1.png";
import star2 from "./assets/star-2.png";

const numStars = Array.from({ length: 5 }, (_, i) => i + 1);

export default function App() {
  const [rating, setRating] = useState(0);
  function handleRating(starNumber) {
    setRating(starNumber);
  }

  return (
    <div className="app">
      <div className="star-rating">
        <h1>Star Rating</h1>
        <div className="stars-container">
          {numStars.map((starNumber) => {
            return (
              <img
                key={starNumber}
                src={rating >= starNumber ? star2 : star1}
                alt="rating-star"
                className="star"
                onClick={() => handleRating(starNumber)}
              />
            );
          })}
          {rating > 0 && <span className="num">{rating}</span>}
        </div>
      </div>
    </div>
  );
}

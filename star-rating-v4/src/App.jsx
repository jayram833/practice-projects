import { useState } from "react";
import star1 from "./assets/star-1.svg";
import star2 from "./assets/star-2.svg";

export default function App() {
  const [currentRating, setCurrentRating] = useState(0);

  function handleRating(rating) {
    setCurrentRating(rating);
  }

  return (
    <div>
      <h1>Star Rating</h1>
      <div className="rating">
        <div>
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              onRating={() => handleRating(i + 1)}
              isRated={currentRating >= i + 1}
            />
          ))}
        </div>
        <p>{currentRating ? currentRating : ""}</p>
      </div>
    </div>
  );
}

function Star({ onRating, isRated }) {
  return (
    <span style={{ cursor: "pointer" }} onClick={() => onRating()}>
      {isRated ? (
        <img style={{ width: "20px" }} src={star2} alt="" />
      ) : (
        <img style={{ width: "20px" }} src={star1} alt="" />
      )}
    </span>
  );
}

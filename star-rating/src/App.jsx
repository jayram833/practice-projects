import { useState } from "react";
import icon1 from "./assets/star-1.png";
import icon2 from "./assets/star.png";

const numStars = 5;

export default function App() {
  const [userRating, setUserRating] = useState(Array(numStars).fill(false));

  function onRating(value) {
    const newRating = userRating.map((_, index) => index < value);
    setUserRating(newRating);
  }

  return (
    <div className="app">
      <h1>Star Rating</h1>
      <div className="stars">
        {Array.from({ length: numStars }, (_, i) => (
          <Star
            key={i}
            handleRating={onRating}
            value={i + 1}
            isRated={userRating[i]}
          />
        ))}
        <span className="rating">{userRating.filter(Boolean).length}</span>
      </div>
    </div>
  );
}

function Star({ value, handleRating, isRated }) {
  return (
    <span className="star" onClick={() => handleRating(value)}>
      <img src={isRated ? icon2 : icon1} alt={`star ${value}`} />
    </span>
  );
}

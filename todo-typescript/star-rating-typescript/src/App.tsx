import { FC, useState } from "react";
import star1 from "./assets/star1.png";
import star2 from "./assets/star2.png";

const numStars: number[] = Array.from({ length: 5 }, (_, i) => i + 1);

const App: FC = function () {
  const [currentRating, setCurrentRating] = useState(0);

  function handleRating(star: number) {
    setCurrentRating(star);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold tracking-wide">
        Star Rating using Typescript and TailwindCss
      </h1>
      <div className="mt-5 flex items-center gap-2 p-2">
        {numStars.map((star) =>
          currentRating >= star ? (
            <img
              src={star2}
              alt="star"
              key={star}
              className="w-8 cursor-pointer"
              onClick={() => handleRating(star)}
            />
          ) : (
            <img
              src={star1}
              alt="star"
              key={star}
              className="w-8 cursor-pointer"
              onClick={() => handleRating(star)}
            />
          ),
        )}
        <span className="text-2xl">{currentRating > 0 && currentRating}</span>
      </div>
    </div>
  );
};

export default App;

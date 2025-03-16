import { useState } from "react";
import star1 from "./assets/star1.png"
import star2 from "./assets/star2.png"
const numStars = Array.from({ length: 5 }, (_, i) => i + 1)


function StarRating() {
    const [rating, setRating] = useState(0);

    return (
        <div>
            <div className="flex gap-2">
                {numStars.map(star => {
                    return <img key={star} src={rating >= star ? star2 : star1} alt="" onClick={() => setRating(star)} className="w-10 cursor-pointer" />
                })}
            </div>
        </div>
    )
}

export default StarRating

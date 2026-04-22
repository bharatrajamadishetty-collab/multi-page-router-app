import { useState } from "react";

const StarRating = ({ maxStars = 5, onChange }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>
            {[...Array(maxStars)].map((_, index) => {
                const starValue = index + 1;

                return (
                    <span
                        key={index}
                        style={{
                            fontSize: "30px",
                            color: starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
                        }}
                        onClick={() => {
                            setRating(starValue);
                            if (onChange) onChange(starValue);
                        }}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(0)}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );
};

function RatingChange() {
    const handleRatingChange = (value) => {
        console.log("Selected rating:", value);
    };

    return (
        <div>
            <h2>Rate this product:</h2>
            <StarRating maxStars={5} onChange={handleRatingChange} />
        </div>
    );
}

export default RatingChange;
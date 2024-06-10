import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrIndex) {
    setRating(getCurrIndex);
  }
  function handleMouseEnter(getCurrIndex) {
    setHover(getCurrIndex);
  }
  function handleMouseLeave(getCurrIndex) {
    setHover(rating);
  }

  return (
    <>
      <div className="container ">
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={index <= (rating || hover) ? "active" : "inactive" }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={50}
            />
          );
        })}
      </div>
    </>
  );
}

export default StarRating;

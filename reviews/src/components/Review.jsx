import React from "react";
import { useState, useEffect } from "react";
import reviews from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(3);
  const { name, job, image, text } = reviews[index];

  const randomIndex = () =>{
    setIndex(Math.floor(Math.random() * 4))
    console.log(index);
  }
  return (
    <>
      <article className="review ">
        <div className="image-container">
          <img src={image} alt={name} className="person-img " />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <button
          className="prev-btn"
          onClick={() =>
            index === 0 ? setIndex(reviews.length - 1) : setIndex(index - 1)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            index === reviews.length - 1 ? setIndex(0) : setIndex(index + 1)
          }
        >
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomIndex}>surprise</button>
      </article>
    </>
  );
};

export default Review;

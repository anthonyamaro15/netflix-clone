import React from "react";
import img from "../img/bg.jpg";
// import MovieContent from './MovieContent';

const MovieCard = () => {
  return (
    <div className="single-movie-container">
      <div className="img-container">
        <img src={img} alt="image description" />
      </div>
    </div>
  );
};

export default MovieCard;

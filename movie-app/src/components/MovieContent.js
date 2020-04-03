import React from "react";
import MovieCard from "./MovieCard";

const MovieContent = ({ popular }) => {
  //   const [movieArr] = popular;
  //   console.log("new data from movie content ", popular);
  return (
    <div className="movie-content-container">
      <h2>Most popular</h2>
      <div className="display-cards">
        {popular.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            movieId={movie.id}
            movieArr={popular}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieContent;

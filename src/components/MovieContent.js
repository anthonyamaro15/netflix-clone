import React from "react";
import MovieCard from "./MovieCard";

const MovieContent = ({ popular, nextPage }) => {
  return (
    <div className="movie-content-container">
      <h2 datatest-id="t">Most popular</h2>
      <div className="display-cards">
        {popular.map((movie) => (
          <MovieCard key={movie.id} movie={movie} movieArr={popular} />
        ))}
      </div>
      <div className="load-more-btn">
        <button onClick={nextPage}>see more</button>
      </div>
    </div>
  );
};

export default MovieContent;

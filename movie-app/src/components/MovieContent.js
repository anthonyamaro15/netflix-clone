import React from "react";
import MovieCard from "./MovieCard";

const MovieContent = () => {
  return (
    <div className="movie-content-container">
      <h2>Most popular</h2>
      <div className="display-cards">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default MovieContent;

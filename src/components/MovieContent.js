import React from "react";
import MovieCard from "./MovieCard";

const MovieContent = ({ popular, nextPage }) => {
  //   console.log("popular data here ", popular);
  return (
    <div className="movie-content-container">
      <h2>Most popular</h2>
      <div className="display-cards">
        {popular.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            movieArr={popular}

            // addToFavorites={() => addToFavorites(movie)}
          />
        ))}
      </div>
      <div className="load-more-btn">
        <button onClick={nextPage}>see more</button>
      </div>
    </div>
  );
};

export default MovieContent;

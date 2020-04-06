import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";

const MovieContent = ({ popular, nextPage }) => {
  const dispatch = useDispatch();

  //   const [movieArr] = popular;
  //   console.log("new data from movie content ", popular);

  const addToFavorites = (movie) => {
    dispatch({ type: "ADD_FAVORITE", payload: movie });
    //  console.log("item clicked", movie);
  };
  return (
    <div className="movie-content-container">
      <h2>Most popular</h2>
      <div className="display-cards">
        {popular.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            movieId={movie.id}
            movieArr={popular}
            addToFavorites={() => addToFavorites(movie)}
          />
        ))}
      </div>
      <button onClick={nextPage}>see more</button>
    </div>
  );
};

export default MovieContent;

import React from "react";
import MovieCard from "./MovieCard";
// import { useDispatch } from "react-redux";

const MovieContent = ({ popular, nextPage }) => {
  //   const dispatch = useDispatch();

  const newArray = popular.map((movies) => {
    return {
      ...movies,
      joined: false,
    };
  });

  //   const [movieArr] = popular;
  //   console.log("new data from movie content ", popular);

  //   const addToFavorites = (movie) => {
  //     dispatch({ type: "ADD_FAVORITE", payload: movie });

  //   };
  //   console.log("newArray ", newArray);
  return (
    <div className="movie-content-container">
      <h2>Most popular</h2>
      <div className="display-cards">
        {newArray.map((movie) => (
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

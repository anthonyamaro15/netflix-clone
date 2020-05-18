import React from "react";
import MovieCard from "./MovieCard";

const MyList = ({ favMovie }) => {
  return (
    <div className="my-list">
      <h1>my list</h1>
      <div className="display-cards">
        {favMovie.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;

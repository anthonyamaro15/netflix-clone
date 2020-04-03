import React from "react";
import MovieCard from "./MovieCard";

const MyList = () => {
  return (
    <div className="my-list">
      <h1>my list</h1>
      <div className="display-cards">
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

export default MyList;

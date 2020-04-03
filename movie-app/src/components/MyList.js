import React from "react";
import { Link } from "react-router-dom";
import img from "../img/bg.jpg";
import MovieCard from "./MovieCard";
import { MdAddCircleOutline } from "react-icons/md";

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

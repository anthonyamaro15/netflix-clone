import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import la from "../img/people.jpg";

const MyListSingleMovie = ({ movie }) => {
  const [movies, setMovies] = useState(movie);

  const { poster_path, title, backdrop_path, movie_id, joined } = movies;

  useEffect(() => {
    setMovies(movie);
  }, [movies, movie]);

  return (
    <div className="single-movie-container">
      <Link to={`/mylist/${movie_id}`}>
        <div className="img-container">
          <img
            src={
              poster_path || backdrop_path
                ? `https://image.tmdb.org/t/p/original${
                    poster_path || backdrop_path
                  }`
                : la
            }
            alt={title}
          />
          <div className={joined ? "hover-info" : "hover-info"}>
            <div className="add-icon"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MyListSingleMovie;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backupImg from "../img/people.jpg";

const MyListSingleMovie = ({ movie }) => {
  const [movies, setMovies] = useState(movie);

  const { poster_path, title, backdrop_path, movie_id, joined } = movies;

  useEffect(() => {
    setMovies(movie);
  }, [movies, movie]);

  const movieImg = `https://image.tmdb.org/t/p/original${poster_path || backdrop_path}` || backupImg;

  return (
    <div className="single-movie-container">
      <Link to={`/acc/mylist/${movie_id}`}>
        <div className="img-container">
          <img src={movieImg} alt={title} />
          <div className="hover-info">
            <div className="add-icon"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MyListSingleMovie;

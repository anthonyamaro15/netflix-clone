import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import backupImg from "../img/people.jpg";

const MovieCard = ({ movie }) => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(movie);

  const { poster_path, title, backdrop_path, id, joined } = movies;

  // save movie data to state. if you refresh you still will get the data
  useEffect(() => {
    setMovies(movie);
  }, [movies, movie]);

  const movieImg = `https://image.tmdb.org/t/p/original${poster_path || backdrop_path}` || backupImg;
  const addToFavorites = joined ? "added-to-favorites showAddedMovies" : "added-to-favorites";

  return (
    <div className="single-movie-container">
      <Link to={`${url}/${id}`}>
        <div className="img-container">
          <div className={addToFavorites}>
            <h2>in my list</h2>
          </div>
          <img src={movieImg} alt={title} />
          <div className="hover-info">
            <div className="add-icon"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

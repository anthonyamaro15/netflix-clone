import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import la from "../img/people.jpg";

const MovieCard = ({ movie }) => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(movie);

  const { poster_path, title, backdrop_path, id, joined } = movies;

  // save movie data to state. if you refresh you still will get the data
  useEffect(() => {
    setMovies(movie);
  }, [movies, movie]);

  return (
    <div className="single-movie-container">
      <Link to={`${url}/${id}`}>
        <div className="img-container">
          <div
            className={
              joined
                ? "added-to-favorites showAddedMovies"
                : "added-to-favorites"
            }
          >
            <h2>in my list</h2>
          </div>
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

export default MovieCard;

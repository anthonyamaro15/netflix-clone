import React, { useEffect, useState } from "react";
import { useRouteMatch, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import la from "../img/people.jpg";

const MovieCard = ({ movie }) => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(movie);

  const { poster_path, title, name, vote_average, backdrop_path, id } = movies;

  useEffect(() => {
    setMovies(movie);
  }, [movies]);

  return (
    <div className="single-movie-container">
      <Link to={`${url}/${id}`}>
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
          <div className="hover-info">
            <h3>{name ? name : title}</h3>
            <p>rating: {vote_average}</p>
            <div className="add-icon"></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

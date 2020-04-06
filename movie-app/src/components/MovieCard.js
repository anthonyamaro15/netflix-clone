import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";

const MovieCard = ({ movie, movieId, addToFavorites }) => {
  const { url } = useRouteMatch();

  const { poster_path, title, name, vote_average } = movie;

  return (
    <div className="single-movie-container">
      <Link to={`${url}/${movieId}`}>
        <div className="img-container">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
          <div className="hover-info">
            <h3>{name ? name : title}</h3>
            <p>rating: {vote_average}</p>
            <div className="add-icon">
              <div onClick={addToFavorites}>
                <MdAddCircleOutline />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

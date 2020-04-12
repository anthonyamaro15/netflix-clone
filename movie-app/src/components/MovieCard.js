import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdAddCircleOutline } from "react-icons/md";
import la from "../img/people.jpg";

const MovieCard = ({ movie, movieId, addToFavorites }) => {
  const { url } = useRouteMatch();

  const { poster_path, title, name, vote_average, backdrop_path } = movie;
  console.log("id here", movieId);

  console.log(url);

  return (
    <div className="single-movie-container">
      <Link to={`${url}/${movieId}`}>
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

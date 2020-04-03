import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../img/bg.jpg";
// import MovieContent from './MovieContent';
import { MdAddCircleOutline } from "react-icons/md";

const MovieCard = ({ movie, movieId }) => {
  const { path, url } = useRouteMatch();
  const params = useParams();
  console.log(movieId);

  const { poster_path, title, vote_average } = movie;
  return (
    <div className="single-movie-container">
      <Link to={`/info/${movieId}`}>
        <div className="img-container">
          <img
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
          <div className="hover-info">
            <h3>{title}</h3>
            <p>rating: {vote_average}</p>
            <div className="add-icon">
              <div>
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

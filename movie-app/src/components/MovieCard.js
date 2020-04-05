import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
// import {useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
// import img from "../img/bg.jpg";
// import MovieContent from './MovieContent';
import { MdAddCircleOutline } from "react-icons/md";

const MovieCard = ({ movie, movieId, addToFavorites }) => {
  // const dispatch = useDispatch();
  const { path, url } = useRouteMatch();
  const params = useParams();
  //   console.log(movieId);

  //   const trimName = movie.name ? movie.name.join("") : movie.title.join("");

  //   console.log("new names ", trimName);

  const { poster_path, title, name, vote_average } = movie;

  //   console.log("path here", path);
  //   console.log("url here", url);
  //   console.log("params ", params);

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

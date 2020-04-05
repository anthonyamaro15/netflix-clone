import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const SingleMovieInfo = ({ popular, playingMovie, latestRated, tvPopular }) => {
  const { browse, id } = useParams();
  const { path, url } = useRouteMatch();

  //   const { popular } = reducer.popularReducer;
  //   console.log("from singleMovie ", popular);

  const findPathMovie = (arr) => {
    let rightMovie = arr.find((movie) => movie.id === Number(id));
    return rightMovie;
  };

  let movie = "";
  //   console.log("path  here", path);
  //   console.log("function  here", findPathMovie(tvPopular));
  //   console.log("id here", id);
  //   console.log("right movie ", movie);

  if (browse === "browse") {
    movie = findPathMovie(popular);
  } else if (browse === "tvshows") {
    movie = findPathMovie(tvPopular);
  } else if (browse === "movies") {
    movie = findPathMovie(latestRated);
  } else {
    movie = findPathMovie(playingMovie);
  }
  console.log("from single movie component ", movie);

  return (
    <div className="single-movie-info-container">
      <div className="single-movie-info">
        <h1>{movie.title}</h1>
        <div className="display-movie-info">
          <span className="rating">Rating {movie.vote_average}</span>
          <span className="date-release">
            {" "}
            date released: {""} {movie.release_date}
          </span>
        </div>
        <p className="single-movie-description">{movie.overview}</p>
        <div className="single-more-info">
          <button>
            {" "}
            <span>
              <FaPlus />{" "}
            </span>
            my list
          </button>
        </div>
      </div>
      <div className="image-movie-info">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleMovieInfo;

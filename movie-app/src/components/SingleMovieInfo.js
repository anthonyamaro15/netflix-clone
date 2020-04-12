import React from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const SingleMovieInfo = ({
  popular,
  playingMovie,
  latestRated,
  tvPopular,
  addToFavorites,
  movieSearchResponse,
}) => {
  const { browse, id } = useParams();

  const findPathMovie = (arr) => {
    let rightMovie = arr.find((movie) => movie.id === Number(id));
    return rightMovie;
  };

  console.log(id);
  let movie = "";

  if (browse === "browse") {
    movie = findPathMovie(popular);
  } else if (browse === "tvshows") {
    movie = findPathMovie(tvPopular);
  } else if (browse === "movies") {
    movie = findPathMovie(latestRated);
  } else if (browse === "results") {
    movie = findPathMovie(movieSearchResponse);
  } else {
    movie = findPathMovie(playingMovie);
  }

  //   console.log(movie);

  return (
    <div className="single-movie-info-container">
      <div className="single-movie-info">
        <h1>{movie.original_name ? movie.original_name : movie.title}</h1>
        <div className="display-movie-info">
          <span className="rating">Rating {movie.vote_average}</span>
          <span className="date-release">
            {" "}
            date released: {""}{" "}
            {movie.first_air_date ? movie.first_air_date : movie.release_date}
          </span>
        </div>
        <p className="single-movie-description">{movie.overview}</p>
        <div className="single-more-info">
          <button onClick={() => addToFavorites(movie)}>
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

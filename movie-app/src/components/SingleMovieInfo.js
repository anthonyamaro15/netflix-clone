import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const SingleMovieInfo = ({
  popular,
  playingMovie,
  latestRated,
  tvPopular,
  addToFavorites,
  movieSearchResponse,
  favoriteList,
}) => {
  const { browse, id } = useParams();
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (browse === "browse") {
      setData(popular);
    } else if (browse === "tvshows") {
      setData(tvPopular);
    } else if (browse === "movies") {
      setData(latestRated);
    } else if (browse === "results") {
      setData(movieSearchResponse);
    } else if (browse === "mylist") {
      setData(favoriteList);
    } else {
      setData(playingMovie);
    }
  }, []);

  useEffect(() => {
    setMovie(data.find((movie) => movie.id === Number(id)));
  }, [data]);

  return movie && data ? (
    <div className="single-movie-info-container">
      <div className="single-movie-info">
        <h1>{movie.original_name ? movie.original_name : movie.title}</h1>
        <div className="display-movie-info">
          <span className="rating">Rating: {movie.vote_average}</span>
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
  ) : (
    <h2>Loading...</h2>
  );
};

export default SingleMovieInfo;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import YouTube from "react-youtube";

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
  const dispatch = useDispatch();
  //   const [addToFav, setAddToFav] = useState(false);
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});
  const { singleMovie } = useSelector((state) => state.singleMovieReducer);

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
  }, [
    browse,
    popular,
    tvPopular,
    latestRated,
    movieSearchResponse,
    favoriteList,
    playingMovie,
  ]);

  useEffect(() => {
    setMovie(data.find((movie) => movie.id === Number(id)));
  }, [data, id]);

  useEffect(() => {
    dispatch({ type: "FETCHING_SINGLE_VIDEO" });
    axiosWithAuth()
      .get(
        `/movie/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((res) => {
        dispatch({ type: "SAVING_SINGLE_VIDEO_ID", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_WHILE_FETCHING_SINGLE_VIDEO", payload: err });
      });
  }, [dispatch, id]);

  const ops = {
    playerVars: {
      autoplay: 1,
    },
  };

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
        <div
          className={
            movie.joined ? "added single-more-info" : "single-more-info"
          }
        >
          {movie && (
            <button
              onClick={() => addToFavorites(data, movie, browse)}
              disabled={movie.joined}
            >
              {" "}
              <span>
                <FaPlus />{" "}
              </span>
              {movie.joined ? "added" : "my list"}
            </button>
          )}
          {/**
      
      */}
        </div>
      </div>
      <div className="image-movie-info">
        {singleMovie.length > 0 ? (
          <YouTube
            videoId={singleMovie[0].key}
            opts={ops}
            className="youtubes"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
          />
        )}
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default SingleMovieInfo;

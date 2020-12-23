import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory, useRouteMatch } from "react-router-dom";
import axios from "axios";
import YouTube from "react-youtube";
import { BiMinus, BiPlus } from "react-icons/bi";
import { serverUrl } from '../envVariables';

const SingleMovieInfo = ({
  popular,
  playingMovie,
  latestRated,
  tvPopular,
  movieSearchResponse,
  favoriteList,
  getFavoriteData,
}) => {
  const { browse, id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [movie, setMovie] = useState({});
  const { singleMovie } = useSelector((state) => state.singleMovieReducer);
  const [userId, setUserId] = useState("");
  const [ourMovie, setOurMovie] = useState({});
  const history = useHistory();
  const route = useRouteMatch();

  // check the type from the url so we know in which category to find movie clicked.
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
    let userInfo = JSON.parse(localStorage.getItem("id"));
    if (userInfo) {
      setUserId(userInfo);
    }
  }, []);

  useEffect(() => {
    if (browse === "mylist") {
      setMovie(data.find((movie) => movie.movie_id === Number(id)));
    } else {
      setMovie(data.find((movie) => movie.id === Number(id)));
    }
  }, [data, id, browse]);

  useEffect(() => {
    setOurMovie(favoriteList.find((fv) => fv.movie_id === Number(id)));
  }, [favoriteList, data, id]);

  // get movie ID for the video player component.
  useEffect(() => {
    dispatch({ type: "FETCHING_SINGLE_VIDEO" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((res) => {
        dispatch({ type: "SAVING_SINGLE_VIDEO_ID", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_WHILE_FETCHING_SINGLE_VIDEO", payload: err.response.data });
      });
  }, [dispatch, id]);

  const addToFavoriteList = (obj) => {
    if (obj.origin_country) {
      delete obj.origin_country;
    }
    delete obj.genre_ids;
    delete obj.adult;
    delete obj.video;
    let movie_id = obj.id;
    delete obj.id;

    let values = { ...obj, user_id: userId, movie_id, joined: true };

    axios
      .post(`${serverUrl}/tofavorites`, values)
      .then(() => {
        getFavoriteData();
      })
      .catch((err) => {
        console.log(err.response.data.errorMessage);
      });
  };

  const removeFavorite = (obj) => {
    axios
      .delete(
        `${serverUrl}/remove/${userId}/${obj.movie_id}`
      )
      .then(() => {
        getFavoriteData();
        if (browse === "mylist") {
            history.push('/acc/browse');
        }
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

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
            ourMovie && ourMovie.joined
              ? "added single-more-info"
              : "single-more-info"
          }
        >
          <button
            onClick={
              ourMovie && ourMovie.joined
                ? () => removeFavorite(ourMovie)
                : () => addToFavoriteList(movie)
            }
          >
            {" "}
            <span>
              {ourMovie && ourMovie.joined ? <BiMinus /> : <BiPlus />}
            </span>
            {ourMovie && ourMovie.joined ? "in my list" : "add to my list"}
          </button>
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

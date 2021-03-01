import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import RenderSingleMovieInfo from './innerComponents/RenderSingleMovieInfo';
import { apiKey, serverUrl } from '../envVariables';

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
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
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
    delete obj.id;

    let values = { ...obj, user_id: userId, movie_id: id, joined: true };

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

  return movie && data ? (
     <RenderSingleMovieInfo 
         movie={movie} 
         ourMovie={ourMovie} 
         singleMovie={singleMovie} 
         removeFavorite={removeFavorite} 
         addToFavoriteList={addToFavoriteList} 
      />
  ) : (
    <h2>Loading...</h2>
  );
};

export default SingleMovieInfo;

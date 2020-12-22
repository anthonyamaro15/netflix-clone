import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { Route } from "react-router-dom";
import { serverUrl } from '../envVariables';

import Navbar from "./Navbar";
import Header from "./Header";
import MovieContent from "./MovieContent";
import SingleMovieInfo from "./SingleMovieInfo";
import MyList from "./MyList";

const MainApp = () => {
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));

  const { popular, loading, error, popularPage } = reducer.popularReducer;
  const { tvPopular, tvPopularPage } = reducer.tvPopularReducer;
  const { latestRated, latestRatedPage } = reducer.ratedReducer;
  const { playingMovie, playingMoviePage } = reducer.playingNowReducer;
  const { movieSearchResponse } = reducer.searchReducer;
  const { favoriteList } = useSelector((state) => state.favoriteListReducer);

  // helper function to make the GET request
  const getMovieData = async (...args) => {
    const [FetchType, url, dataType, category, dataError] = args;
    dispatch({ type: FetchType });
    return axiosWithAuth()
      .get(url)
      .then((res) => {
         console.log("resposne hrere ", res);
        dispatch({
          type: dataType,
          payload: res.data,
          category,
        });
      })
      .catch((err) => {
        dispatch({
          type: dataError,
          payload: err.response.data,
        });
      });
  };

  // this axios call is getting the data for the /browse
  useEffect(() => {
    getMovieData(
      "FETCHING_DATA",
      `${serverUrl}/browse/${popularPage}`,
      "GETTING_DATA",
      "browse",
      "ERROR"
    );
  }, [popularPage, dispatch]);

  // this axios call is getting the data for the /tvshows
  useEffect(() => {
    getMovieData(
      "FETCHING_TV_DATA",
      `${serverUrl}/tvpopular/${tvPopularPage}`,
      "GETTING_TV_DATA",
      "tvshows",
      "ERROR_TV"
    );
  }, [tvPopularPage, dispatch]);

  // this axios call is getting the data for /movies
  useEffect(() => {
    getMovieData(
      "FETCHING_RATED_DATA",
      `${serverUrl}/latestrated/${latestRatedPage}`,
      "GETTING_RATED_DATA",
      "movies",
      "ERROR_RATED"
    );
  }, [latestRatedPage, dispatch]);

  // this axios call is getting the data for /latest
  useEffect(() => {
    getMovieData(
      "FETCHING_LATEST_DATA",
      `${serverUrl}/playingmovie/${playingMoviePage}`,
      "GETTING_LATEST_DATA",
      "latest",
      "ERROR_LATEST"
    );
  }, [playingMoviePage, dispatch]);

  // we need user id to know which user we adding favorite movies from
  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("id"));
    if (userInfo) {
      setUserId(userInfo);
    }
  }, [userId, setUserId]);

  useEffect(() => {
    getFavoriteData();
  }, [userId]);

  // get favorite list for user
  function getFavoriteData() {
    if (userId) {
      return axios
        .get(`${serverUrl}/getfavorites/${userId}`)
        .then((res) => {
          dispatch({ type: "GET_FAVORITE_LIST", payload: res.data });
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }

  // helper function to load more movies depending on the type
  const nextPage = (type) => {
    dispatch({ type: type });
  };

  // we are using same component to render movie categories
  return (
    <div className="MainApp">
      {error ? (
        <h1 className="error-found">{error}</h1>
      ) : (
        <div>
          <Route exact path="/acc/browse">
            <Navbar />
            <Header popular={popular} loading={loading} />
            <MovieContent
              popular={popular}
              nextPage={() => nextPage("NEXT_PAGE")}
            />
          </Route>

          <Route exact path="/acc/tvshows">
            <Navbar />
            <Header popular={tvPopular} />
            <MovieContent
              popular={tvPopular}
              nextPage={() => nextPage("NEXT_PAGE_POPULAR")}
            />
          </Route>

          <Route exact path="/acc/movies">
            <Navbar />
            <Header popular={latestRated} />
            <MovieContent
              popular={latestRated}
              nextPage={() => nextPage("NEXT_PAGE_LATEST")}
            />
          </Route>

          <Route exact path="/acc/latest">
            <Navbar />
            <Header popular={playingMovie} />
            <MovieContent
              popular={playingMovie}
              nextPage={() => nextPage("NEXT_PAGE_PLAYING")}
            />
          </Route>

          <Route exact path="/acc/mylist">
            <Navbar />

            <MyList favMovie={favoriteList} />
          </Route>

          <Route exact path="/acc/results">
            <Navbar />
            <Header popular={movieSearchResponse} />
            <MovieContent popular={movieSearchResponse} />
          </Route>

          <Route exact path={`/acc/:browse/:id`}>
            <Navbar />
            <SingleMovieInfo
              popular={popular}
              playingMovie={playingMovie}
              latestRated={latestRated}
              tvPopular={tvPopular}
              movieSearchResponse={movieSearchResponse}
              favoriteList={favoriteList}
              getFavoriteData={getFavoriteData}
            />
          </Route>
        </div>
      )}
    </div>
  );
};

export default MainApp;

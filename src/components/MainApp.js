import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { Route } from "react-router-dom";

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

  const getMovieData = async (...args) => {
    const [FetchType, url, dataType, category, dataError] = args;

    dispatch({ type: FetchType });
    return axiosWithAuth()
      .get(url)
      .then((res) => {
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

  useEffect(() => {
    getMovieData(
      "FETCHING_DATA",
      `${process.env.REACT_APP_API_SERVER_URL}/browse/${popularPage}`,
      "GETTING_DATA",
      "browse",
      "ERROR"
    );
  }, [popularPage, dispatch]);

  // this axios call is getting the data for the /tvshows
  useEffect(() => {
    getMovieData(
      "FETCHING_TV_DATA",
      `${process.env.REACT_APP_API_SERVER_URL}/tvpopular/${tvPopularPage}`,
      "GETTING_TV_DATA",
      "tvshows",
      "ERROR_TV"
    );
  }, [tvPopularPage, dispatch]);

  // this axios call is getting the data for /movies
  useEffect(() => {
    getMovieData(
      "FETCHING_RATED_DATA",
      `${process.env.REACT_APP_API_SERVER_URL}/latestrated/${latestRatedPage}`,
      "GETTING_RATED_DATA",
      "movies",
      "ERROR_RATED"
    );
  }, [latestRatedPage, dispatch]);

  // this axios call is getting the data for /latest
  useEffect(() => {
    getMovieData(
      "FETCHING_LATEST_DATA",
      `${process.env.REACT_APP_API_SERVER_URL}/playingmovie/${playingMoviePage}`,
      "GETTING_LATEST_DATA",
      "latest",
      "ERROR_LATEST"
    );
  }, [playingMoviePage, dispatch]);

  useEffect(() => {
    let userInfo = JSON.parse(localStorage.getItem("id"));
    if (userInfo) {
      setUserId(userInfo);
    }
  }, [userId, setUserId]);

  useEffect(() => {
    getFavoriteData();
  }, [userId]);

  function getFavoriteData() {
    if (userId) {
      return axios
        .get(
          `https://netflix-${process.env.REACT_APP_API_SERVER_URL}/getfavorites/${userId}`
        )
        .then((res) => {
          console.log("favorites ", res.data);
          //   setFavoriteList(res.data);
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

  return (
    <div className="MainApp">
      {error ? (
        <h1 className="error-found">{error}</h1>
      ) : (
        <div>
          <Route exact path={`/browse`}>
            <Navbar />
            <Header popular={popular} loading={loading} />
            <MovieContent
              popular={popular}
              nextPage={() => nextPage("NEXT_PAGE")}
            />
          </Route>

          <Route exact path="/tvshows">
            <Navbar />
            <Header popular={tvPopular} />
            <MovieContent
              popular={tvPopular}
              nextPage={() => nextPage("NEXT_PAGE_POPULAR")}
            />
          </Route>

          <Route exact path="/movies">
            <Navbar />
            <Header popular={latestRated} />
            <MovieContent
              popular={latestRated}
              nextPage={() => nextPage("NEXT_PAGE_LATEST")}
            />
          </Route>

          <Route exact path="/latest">
            <Navbar />
            <Header popular={playingMovie} />
            <MovieContent
              popular={playingMovie}
              nextPage={() => nextPage("NEXT_PAGE_PLAYING")}
            />
          </Route>

          <Route exact path="/mylist">
            <Navbar />
            {/**
             */}
            <MyList favMovie={favoriteList} />
          </Route>

          <Route exact path="/results">
            <Navbar />
            <Header popular={movieSearchResponse} />
            <MovieContent popular={movieSearchResponse} />
          </Route>

          <Route exact path={`/:browse/:id`}>
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

            {/**
            <MovieContent popular={popular} />
            
            */}
          </Route>
        </div>
      )}
    </div>
  );
};

///browse/419704
///browse/419704

export default MainApp;

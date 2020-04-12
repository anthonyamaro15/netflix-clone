import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import MovieContent from "./MovieContent";
import SingleMovieInfo from "./SingleMovieInfo";
import MyList from "./MyList";
import Footer from "./Footer";

// WORK ON THE RESPONSINESS OF THE APP,

// TRY ADDING VIDEOS TO IT.

// FOR FUTURE BUILD A HOME PAGE WITH LOGIN AND SIGN UP BUTTONS.
/// CREATE USER PROFILES

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));

  const {
    popular,
    loading,
    error,
    favoriteList,
    popularPage,
  } = reducer.popularReducer;

  const { tvPopular, tvPopularPage } = reducer.tvPopularReducer;
  const { latestRated, latestRatedPage } = reducer.ratedReducer;
  const { playingMovie, playingMoviePage } = reducer.playingNowReducer;
  const { movieSearch, movieSearchResponse } = reducer.searchReducer;

  // this axios call is getting the data for the search form
  useEffect(() => {
    dispatch({ type: "FETCHING_SEARCH" });
    axiosWithAuth()
      .get(
        `/search/movie?api_key=${process.env.REACT_APP_API}&language=en-US&query=${movieSearch}&page=1&include_adult=false`
      )
      .then((res) => {
        dispatch({ type: "GETTING_SEARCH_VALUES", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR_SEARCH",
          payload: err.response.data.status_message,
        });
      });
  }, [movieSearch, dispatch]);

  // this axios call is getting the data for the /browse
  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axiosWithAuth()
      .get(
        `/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=${popularPage}`
      )
      .then((res) => {
        dispatch({ type: "GETTING_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err.response.data.status_message });
        console.log(err.response.data.status_message);
      });
  }, [popularPage, dispatch]);

  // this axios call is getting the data for the /tvshows
  useEffect(() => {
    dispatch({ type: "FETCHING_TV_DATA" });
    axiosWithAuth()
      .get(
        `/tv/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=${tvPopularPage}`
      )
      .then((res) => {
        dispatch({ type: "GETTING_TV_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR_TV",
          payload: err.response.data.status_message,
        });
      });
  }, [tvPopularPage, dispatch]);

  // this axios call is getting the data for /movies
  useEffect(() => {
    dispatch({ type: "FETCHING_RATED_DATA" });
    axiosWithAuth()
      .get(
        `/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=${latestRatedPage}`
      )
      .then((res) => {
        dispatch({ type: "GETTING_RATED_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR_RATED",
          payload: err.response.data.status_message,
        });
      });
  }, [latestRatedPage, dispatch]);

  // this axios call is getting the data for /latest
  useEffect(() => {
    dispatch({ type: "FETCHING_LATEST_DATA" });
    axiosWithAuth()
      .get(
        `/movie/now_playing?api_key=${process.env.REACT_APP_API}&language=en-US&page=${playingMoviePage}`
      )
      .then((res) => {
        dispatch({ type: "GETTING_LATEST_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR_LATEST",
          payload: err.response.data.status_message,
        });
      });
  }, [playingMoviePage, dispatch]);

  const addToFavorites = (movies) => {
    dispatch({ type: "ADD_FAVORITE", payload: movies });
  };

  const nextPage = (type) => {
    dispatch({ type: type });
  };

  return (
    <div className="MainApp">
      {error ? (
        <h1 className="error-found">{error}</h1>
      ) : (
        <div>
          <Navbar />
          <Route exact path="/browse">
            <Header popular={popular} loading={loading} />
            <MovieContent
              popular={popular}
              nextPage={() => nextPage("NEXT_PAGE")}
            />
          </Route>

          <Route exact path="/tvshows">
            <Header popular={tvPopular} />
            <MovieContent
              popular={tvPopular}
              nextPage={() => nextPage("NEXT_PAGE_POPULAR")}
            />
          </Route>

          <Route exact path="/movies">
            <Header popular={latestRated} />
            <MovieContent
              popular={latestRated}
              nextPage={() => nextPage("NEXT_PAGE_LATEST")}
            />
          </Route>

          <Route exact path="/latest">
            <Header popular={playingMovie} />
            <MovieContent
              popular={playingMovie}
              nextPage={() => nextPage("NEXT_PAGE_PLAYING")}
            />
          </Route>

          <Route exact path="/mylist">
            <MyList favoriteList={favoriteList} />
          </Route>

          <Route exact path="/results">
            <Header popular={movieSearchResponse} />
            <MovieContent popular={movieSearchResponse} />
          </Route>

          <Route exact path="/:browse/:id">
            <SingleMovieInfo
              popular={popular}
              playingMovie={playingMovie}
              latestRated={latestRated}
              tvPopular={tvPopular}
              addToFavorites={addToFavorites}
              movieSearchResponse={movieSearchResponse}
              favoriteList={favoriteList}
            />
            <MovieContent popular={popular} />
          </Route>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainApp;

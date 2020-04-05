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

/// NEED TO WORK ON THE ROUTING FOR EACH CARD. RIGHT NOW ONLY WORKS WHEN CLICKING THE MOVIES ON THE HOME COMPONENT.

/// NEED TO WORK IN THE SEARCH FORM TO GET SPECIFIC MOVIE AS WELL.

/// NEED TO FIND A WAY TO CHANGE THE HEADER INFORMATION WHEN YOU REALOAD THE PAGE OR EVERY TIME YOU
// NAVEGATE TO A DIFFERENT COMPONENT.

// WORK ON THE RESPONSINESS OF THE APP,

// TRY ADDING VIDEOS TO IT.

// FOR FUTURE BUILD A HOME PAGE WITH LOGIN AND SIGN UP BUTTONS.
/// CREATE USER PROFILES//

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => ({
    ...state
  }));

  const { popular, loading, error, favoriteList } = reducer.popularReducer;
  const { tvPopular } = reducer.tvPopularReducer;
  const { latestRated } = reducer.ratedReducer;
  const { playingMovie } = reducer.playingNowReducer;

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axiosWithAuth()
      .get(
        `/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then(res => {
        dispatch({ type: "GETTING_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR", payload: err.response });
        console.log(err);
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCHING_TV_DATA" });
    axiosWithAuth()
      .get(
        `/tv/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then(res => {
        dispatch({ type: "GETTING_TV_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR_TV", payload: err.response });
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCHING_RATED_DATA" });
    axiosWithAuth()
      .get(
        `/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then(res => {
        dispatch({ type: "GETTING_RATED_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR_RATED", payload: err.response });
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCHING_LATEST_DATA" });
    axiosWithAuth()
      .get(
        `/movie/now_playing?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then(res => {
        dispatch({ type: "GETTING_LATEST_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR_LATEST", payload: err.response });
      });
  }, [dispatch]);

  //   console.log(reducer.popularReducer);
  //   const { popular, loading, error } = reducer.popularReducer;

  //   const randomMovie = () => {
  //     let random = Math.floor(Math.random() * popular.length);
  //     return popular[random];
  //   };

  //   console.log("random movie ", randomMovie());
  // const addToFavorites = movie => {
  //   dispatch({ type: "ADD_FAVORITE", payload: movie });
  // };

  return (
    <div className="MainApp">
      <Navbar />
      <Route exact path="/">
        <Header />
        <MovieContent popular={popular} />
      </Route>
      <Route path="/tvshows">
        <Header />
        <MovieContent popular={tvPopular} />
      </Route>
      <Route path="/movies">
        <Header />
        <MovieContent popular={latestRated} />
      </Route>
      <Route path="/latest">
        <Header />
        <MovieContent popular={playingMovie} />
      </Route>
      <Route path="/mylist">
        <MyList favoriteList={favoriteList} />
      </Route>
      <Route exact path="/:des/:id">
        <SingleMovieInfo />
        <MovieContent popular={popular} />
      </Route>

      <Footer />
    </div>
  );
};

export default MainApp;

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

/// NEED TO WORK IN THE SEARCH FORM TO GET SPECIFIC MOVIE AS WELL.

// WORK ON THE RESPONSINESS OF THE APP,

// TRY ADDING VIDEOS TO IT.

// FOR FUTURE BUILD A HOME PAGE WITH LOGIN AND SIGN UP BUTTONS.
/// CREATE USER PROFILES

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));

  const { popular, loading, error, favoriteList } = reducer.popularReducer;
  const { tvPopular } = reducer.tvPopularReducer;
  const { latestRated } = reducer.ratedReducer;
  const { playingMovie } = reducer.playingNowReducer;

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       // if (window.scrollY >= 3) {
  //       //    setScrolling(true);
  //       // } else {
  //       //    setScrolling(false);
  //       // }
  //       console.log("from mainApp ", window.scrollY);

  //       // if (window.scrollY === 0) {
  //       //    setScrolling(false);
  //       // }
  //     });
  //   }, []);

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axiosWithAuth()
      .get(
        `/movie/popular?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((res) => {
        dispatch({ type: "GETTING_DATA", payload: res.data.results });
      })
      .catch((err) => {
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
      .then((res) => {
        dispatch({ type: "GETTING_TV_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_TV", payload: err.response });
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCHING_RATED_DATA" });
    axiosWithAuth()
      .get(
        `/movie/top_rated?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((res) => {
        dispatch({ type: "GETTING_RATED_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_RATED", payload: err.response });
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "FETCHING_LATEST_DATA" });
    axiosWithAuth()
      .get(
        `/movie/now_playing?api_key=${process.env.REACT_APP_API}&language=en-US&page=1`
      )
      .then((res) => {
        dispatch({ type: "GETTING_LATEST_DATA", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_LATEST", payload: err.response });
      });
  }, [dispatch]);

  const addToFavorites = (movies) => {
    dispatch({ type: "ADD_FAVORITE", payload: movies });
  };

  return (
    <div className="MainApp">
      <Navbar />
      <Route exact path="/browse">
        <Header popular={popular} loading={loading} />

        <MovieContent popular={popular} />
      </Route>

      <Route exact path="/tvshows">
        <Header popular={tvPopular} />
        <MovieContent popular={tvPopular} />
      </Route>

      <Route exact path="/movies">
        <Header popular={latestRated} />
        <MovieContent popular={latestRated} />
      </Route>

      <Route exact path="/latest">
        <Header popular={playingMovie} />
        <MovieContent popular={playingMovie} />
      </Route>

      <Route exact path="/mylist">
        <MyList favoriteList={favoriteList} />
      </Route>

      <Route exact path="/:browse/:id">
        <SingleMovieInfo
          popular={popular}
          playingMovie={playingMovie}
          latestRated={latestRated}
          tvPopular={tvPopular}
          addToFavorites={addToFavorites}
        />
        <MovieContent popular={popular} />
      </Route>

      <Footer />
    </div>
  );
};

export default MainApp;

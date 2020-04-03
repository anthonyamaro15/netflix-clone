import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import MovieContent from "./MovieContent";
import SingleMovieInfo from "./SingleMovieInfo";
import MyList from "./MyList";
import Footer from "./Footer";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector(state => ({
    ...state
  }));

  const { popular, loading, error } = reducer.popularReducer;
  const { tvPopular } = reducer.tvPopularReducer;
  const { latestRated } = reducer.ratedReducer;
  const { playingMovie } = reducer.playingNowReducer;
  console.log("playing now movies ", playingMovie);

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8686dd23d65d8d4c4b1c1ad132fcc4fd&language=en-US&page=1`
      )
      .then(res => {
        //   console.log(res.data);
        dispatch({ type: "GETTING_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR", payload: err.response });
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCHING_TV_DATA" });
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=8686dd23d65d8d4c4b1c1ad132fcc4fd&language=en-US&page=1`
      )
      .then(res => {
        //   console.log(res.data.results);
        dispatch({ type: "GETTING_TV_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR_TV", payload: err.response });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCHING_RATED_DATA" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=8686dd23d65d8d4c4b1c1ad132fcc4fd&language=en-US&page=1`
      )
      .then(res => {
        //   console.log("rated data ", res.data);
        dispatch({ type: "GETTING_RATED_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR_RATED", payload: err.response });
      });
  }, []);

  useEffect(() => {
    dispatch({ type: "FETCHING_LATEST_DATA" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=8686dd23d65d8d4c4b1c1ad132fcc4fd&language=en-US&page=1`
      )
      .then(res => {
        //   console.log("playing ", res.data);
        dispatch({ type: "GETTING_LATEST_DATA", payload: res.data.results });
      })
      .catch(err => {
        dispatch({ type: "ERROR_LATEST", payload: err.response });
      });
  }, []);

  //   console.log(reducer.popularReducer);
  //   const { popular, loading, error } = reducer.popularReducer;

  //   const randomMovie = () => {
  //     let random = Math.floor(Math.random() * popular.length);
  //     return popular[random];
  //   };

  //   console.log("random movie ", randomMovie());
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
        <MyList />
      </Route>
      <Route exact path="/info/:id">
        <SingleMovieInfo />
        <MovieContent popular={popular} />
      </Route>
      ;
      <Footer />
    </div>
  );
};

export default MainApp;

//  <Route exact path="/:id">
//    <SingleMovieInfo />
//    <MovieContent />
//  </Route>;

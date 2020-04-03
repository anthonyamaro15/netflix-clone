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

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=8686dd23d65d8d4c4b1c1ad132fcc4fd&language=en-US&page=1`
      )
      .then(res => {
        console.log(res.data);
        dispatch({ type: "GETTING_DATA", payload: res.data });
      })
      .catch(err => {
        dispatch({ type: "ERROR", payload: err.response });
        console.log(err);
      });
  }, []);

  //   console.log(reducer.popularReducer);
  const { popular, loading, error } = reducer.popularReducer;
  return (
    <div className="MainApp">
      <Navbar />
      <Route exact path="/">
        <Header />
        <MovieContent />
      </Route>
      <Route path="/tvshows">
        <Header />
        <MovieContent />
      </Route>
      <Route path="/movies">
        <Header />
        <MovieContent />
      </Route>
      <Route path="/latest">
        <Header />
        <MovieContent />
      </Route>
      <Route path="/mylist">
        <MyList />
      </Route>
      <Route exact path="/:name/:id">
        <SingleMovieInfo />
        <MovieContent />
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

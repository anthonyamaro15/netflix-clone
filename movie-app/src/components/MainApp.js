import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import MovieContent from "./MovieContent";
import SingleMovieInfo from "./SingleMovieInfo";

const MainApp = () => {
  return (
    <div>
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

      <Route exact path="/:id">
        <SingleMovieInfo />
        <MovieContent />
      </Route>
    </div>
  );
};

export default MainApp;

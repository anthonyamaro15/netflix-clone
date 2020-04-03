import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import MovieContent from "./MovieContent";
import SingleMovieInfo from "./SingleMovieInfo";
import MyList from "./MyList";
import Footer from "./Footer";

const MainApp = () => {
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

      <Footer />
    </div>
  );
};

export default MainApp;

//  <Route exact path="/:id">
//    <SingleMovieInfo />
//    <MovieContent />
//  </Route>;

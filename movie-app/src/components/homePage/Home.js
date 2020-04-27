import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeHeader from "./HomeHeader";
import MainContent from "./MainContent";
import Signup from "./Signup";
import Login from "./Login";

// add home page with sign up and login nav
// need to get the login working as well
// allow only users to see the movies in the page
// fix router for movies
// fix bug in the navbar search
// add media queries
// find a way to make page load faster

const Home = () => {
  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <HomeHeader />
        <MainContent />
      </Route>

      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </div>
  );
};

export default Home;

import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeHeader from "./HomeHeader";
import MainContent from "./MainContent";
import Signup from "./Signup";
import Login from "./Login";
import Footer from "../Footer";

// add media queries
// find a way to make page load faster

const Home = () => {
  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <HomeHeader />
        <MainContent />
        <Footer />
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

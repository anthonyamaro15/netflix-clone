import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeHeader from "./HomeHeader";
import MainContent from "./MainContent";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

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
      <Route exact path="/forgot">
        <Navbar />
        <ForgotPassword />
      </Route>
    </div>
  );
};

export default Home;

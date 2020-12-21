import React from "react";
import { Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import HomeHeader from "./HomeHeader";
import MainContent from "./MainContent";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

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
      <Route exact path="/resetpassword/:token">
        <ResetPassword />
      </Route>
    </div>
  );
};

export default Home;

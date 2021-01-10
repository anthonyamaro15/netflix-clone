import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import HomeHeader from "./HomeHeader";
import MainContent from "./MainContent";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import axios from 'axios';
import { serverUrl } from '../../envVariables';

const Home = () => {

   useEffect(() => {
       const wakeHerokuUp = async () => {
          const { data } = await axios.get(`${serverUrl}`);
          console.log(data.message);
       }
       wakeHerokuUp();
   },[]);
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

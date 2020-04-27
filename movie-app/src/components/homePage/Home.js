import React from "react";

import Navbar from "./Navbar";
import HomeHeader from "./HomeHeader";
import MainContent from "./MainContent";

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
      <Navbar />
      <HomeHeader />
      <MainContent />
    </div>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="movie-info">
        <h1>all american</h1>
        <p className="movie-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          commodi?
        </p>
        <div className="more-info">
          <Link to="/moreinfo">more info</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

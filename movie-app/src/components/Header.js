import React from "react";
import { Link } from "react-router-dom";
import la from "../img/people.jpg";

const Header = ({ header }) => {
  //   const [values] = header[0];
  //   console.log(header[0]);
  //   const { name, title, overview, backdrop_path } = header[0];
  //   const obj = header[0];

  //   console.log(obj);

  return (
    <div className="header-container">
      <img src={la} alt="header of the application" />
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

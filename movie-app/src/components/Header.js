import React from "react";
import { Link } from "react-router-dom";
import la from "../img/people.jpg";
// import { FaCommentDollar } from "react-icons/fa";

const Header = ({ popular, loading }) => {
  //   const [values] = header[0];
  //   console.log(header[0]);
  //   const { name, title, overview, backdrop_path } = header[0];
  //   const obj = header[0];

  console.log("data here ", popular[0]);
  //   const randomMovie = () => {
  //     let random = Math.floor(Math.random() * popular.length);
  //     return popular[random];
  //   };
  //   console.log(randomMovie());
  //   console.log(loading);

  return (
    <div className="header-container">
      <img
        src={
          popular[0] === undefined
            ? la
            : `https://image.tmdb.org/t/p/original${popular[0].backdrop_path}`
        }
        alt="header of the application"
      />
      <div className="movie-info">
        <h1>
          {popular[0] === undefined
            ? "all american"
            : popular[0].original_title || popular[0].original_name}
        </h1>
        <p className="movie-description">
          {popular[0] === undefined ? "loading..." : popular[0].overview}
        </p>
        <div className="more-info">
          <Link to="/moreinfo">more info</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

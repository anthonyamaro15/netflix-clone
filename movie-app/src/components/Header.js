import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import la from "../img/people.jpg";

const Header = ({ popular }) => {
  const { url } = useRouteMatch();

  //   console.log("data here ", popular[0]);

  return (
    <div className="header-container">
      <img
        src={
          popular[18] === undefined
            ? la
            : `https://image.tmdb.org/t/p/original${popular[18].backdrop_path}`
        }
        alt="header of the application"
      />
      <div className="movie-info">
        <h1>
          {popular[18] === undefined
            ? "all american"
            : popular[18].original_title || popular[18].original_name}
        </h1>
        <p className="movie-description">
          {popular[18] === undefined ? "loading..." : popular[18].overview}
        </p>
        <div className="more-info">
          <Link
            to={`${url}/${
              popular[18] === undefined ? "/moreinfo" : popular[18].id
            }`}
          >
            more info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

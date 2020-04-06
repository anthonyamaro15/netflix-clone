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
          popular[6] === undefined
            ? la
            : `https://image.tmdb.org/t/p/original${
                popular[6].backdrop_path || popular[6].poster_path
              }`
        }
        alt="header of the application"
      />
      <div className="movie-info">
        <h1>
          {popular[6] === undefined
            ? "all american"
            : popular[6].original_title || popular[6].original_name}
        </h1>
        <p className="movie-description">
          {popular[6] === undefined ? "loading..." : popular[6].overview}
        </p>
        <div className="more-info">
          <Link
            to={`${url}/${
              popular[6] === undefined ? "/moreinfo" : popular[6].id
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

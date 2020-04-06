import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import la from "../img/people.jpg";

const Header = ({ popular }) => {
  const { url } = useRouteMatch();

  const randomNumber = () => {
    let random = Math.floor(Math.random() * popular.length) + 1;
    return random;
  };

  let num = randomNumber();
  return (
    <div className="header-container">
      <img
        src={
          popular[num] === undefined
            ? la
            : `https://image.tmdb.org/t/p/original${
                popular[num].backdrop_path || popular[num].poster_path
              }` || la
        }
        alt="header of the application"
      />
      <div className="movie-info">
        <h1>
          {popular[num] === undefined
            ? "all american"
            : popular[num].original_title || popular[num].original_name}
        </h1>
        <p className="movie-description">
          {popular[num] === undefined ? "loading..." : popular[num].overview}
        </p>
        <div className="more-info">
          <Link
            to={`${url}/${
              popular[num] === undefined ? "/moreinfo" : popular[num].id
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

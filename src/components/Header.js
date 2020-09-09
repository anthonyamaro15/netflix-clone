import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import backUpImg from "../img/people.jpg";

const Header = ({ popular }) => {
  const { url } = useRouteMatch();

  // function takes care of selecting a random movie every time the page loads
  function random() {
    let randomMovie = Math.floor(Math.random() * popular.length) + 1;
    return randomMovie;
  }

  let num = random();

  // cut string if too long.
  popular.map((des) => {
    if (des.overview.length > 450) {
      des.overview = des.overview.slice(0, 450) + "...";
      return des;
    }
    return des;
  });

  // checking if we have data avaliable if not then display a default img
  return (
    <div className="header-container">
      <img
        src={
          popular[num] === undefined
            ? backUpImg
            : `https://image.tmdb.org/t/p/original${
                popular[num].backdrop_path || popular[num].poster_path
              }` || backUpImg
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

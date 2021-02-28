import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import backUpImg from "../img/people.jpg";

const Header = ({ popular }) => {
  const { url } = useRouteMatch();
  const [num, setRandom] = useState([]);

  // function takes care of selecting a random movie every time the page loads
  useEffect(() => {
   function random() {
      if(popular.length) {
         let randomMovie = Math.floor(Math.random() * popular.length) + 1;
         return randomMovie;
      }
   }
   setRandom(random());
  },[popular]);

  // checking if we have data avaliable if not then display a default img
  return (
     popular.length ? (
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
            { popular[num] === undefined ? "loading..." : popular[num].overview.slice(0, 450) + '...' }
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
    ) : <h1>loadin</h1>
  );
};

export default Header;

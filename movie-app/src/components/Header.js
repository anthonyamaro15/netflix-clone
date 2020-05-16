import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import la from "../img/people.jpg";
import YouTube from "react-youtube";

const Header = ({ popular }) => {
  //   const [random, setRandom] = useState({});
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const { loading, popularVideo } = useSelector((state) => state.videoReducer);
  //   console.log("video reducer", videoReducer);

  function randomNumber() {
    let randomMovie = Math.floor(Math.random() * popular.length) + 1;
    //  setRandom(popular[random]);
    return popular[randomMovie];
  }

  //   const movie = randomNumber();
  //   setTimeout(() => {

  //   }, 500);
  //   const movies = movie ? num.id : "338762";

  useEffect(() => {
    dispatch({ type: "FETCHING_HEADER_VIDEO" });
    axiosWithAuth()
      .get(
        `/movie/338762/videos?api_key=${process.env.REACT_APP_API}&language=en-US`
      )
      .then((res) => {
        //   console.log(res);
        dispatch({ type: "SAVING_VIDEO_ID", payload: res.data.results });
      })
      .catch((err) => {
        dispatch({ type: "ERROR_WHILE_FETCHING_VIDEO", payload: err });
      });
  }, []);

  //   console.log("popular vide ", popularVideo);

  function random() {
    let randomMovie = Math.floor(Math.random() * popular.length) + 1;
    //  setRandom(popular[random]);
    return randomMovie;
  }

  const ops = {
    //  height: "100%",
    //  width: "1000",
    playerVars: {
      autoplay: 1,
    },
  };

  let num = random();
  //   console.log("num here ", num);
  return (
    <div className="header-container">
      <div className="video">
        <YouTube videoId={"F95Fk255I4M"} opts={ops} className="youtube" />
      </div>
      {/**
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
      */}

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

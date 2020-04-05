import React from "react";
import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
// import image from "../img/header.jpg";

const SingleMovieInfo = ({ moviesArray }) => {
  const { id } = useParams();
  //   const { path } = useRouteMatch();
  //   const reducer = useSelector((state) => ({
  //     ...state,
  //   }));

  //   const { popular } = reducer.popularReducer;
  //   console.log("from singleMovie ", popular);

  const movie = moviesArray.find((item) => item.id === Number(id));
  //   console.log("path  here", path);
  //   console.log("url here", url);
  //   console.log("id here", id);
  //   console.log("right movie ", movie);

  console.log("from single movie component ", movie);

  return (
    <div className="single-movie-info-container">
      <div className="single-movie-info">
        <h1>{movie.title}</h1>
        <div className="display-movie-info">
          <span className="rating">Rating {movie.vote_average}</span>
          <span className="date-release">
            {" "}
            date released: {""} {movie.release_date}
          </span>
        </div>
        <p className="single-movie-description">{movie.overview}</p>
        <div className="single-more-info">
          <button>
            {" "}
            <span>
              <FaPlus />{" "}
            </span>
            my list
          </button>
        </div>
      </div>
      <div className="image-movie-info">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleMovieInfo;

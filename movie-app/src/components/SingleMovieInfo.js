import React from "react";
import { FaPlus } from "react-icons/fa";
import image from "../img/header.jpg";

const SingleMovieInfo = () => {
  return (
    <div className="single-movie-info-container">
      <div className="single-movie-info">
        <h1>all american</h1>
        <div className="display-movie-info">
          <span className="rating">Rating 7.2</span>
          <span className="date-release"> date released: {""} 2014-10-22</span>
        </div>
        <p className="single-movie-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
          commodi?
        </p>
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
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SingleMovieInfo;

import React from "react";
import { Link } from "react-router-dom";
import img from "../img/bg.jpg";
// import MovieContent from './MovieContent';
import { MdAddCircleOutline } from "react-icons/md";

const MovieCard = () => {
  return (
    <div className="single-movie-container">
      <Link to="/dd">
        <div className="img-container">
          <img src={img} alt="image description" />
          <div className="hover-info">
            <h3>all american</h3>
            <p>rating 7.2</p>
            <div className="add-icon">
              <div>
                <MdAddCircleOutline />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;

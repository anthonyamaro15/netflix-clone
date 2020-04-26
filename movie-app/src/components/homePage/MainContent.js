import React from "react";
import example from "../../img/exam.png";

const MainContent = () => {
  return (
    <div className="MainContent-border">
      <div className="MainContent">
        <div className="MainContent-desc">
          <h1>Enjoy on you TV.</h1>
          <p>
            Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple TV,
            Blue-ray players, and more.
          </p>
        </div>
        <div className="MainContent-img">
          <img src={example} alt="showcase movies" />
        </div>
      </div>
    </div>
  );
};

export default MainContent;

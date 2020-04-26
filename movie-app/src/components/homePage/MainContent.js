import React from "react";
import example from "../../img/exam.png";
import Loader from "./LoaderIcon";

const MainContent = () => {
  return (
    <div className="MainContent-wrapper">
      <div className="MainContent-border">
        <div className="MainContent">
          <div className="MainContent-desc">
            <h1 className="h-desc">Enjoy on you TV.</h1>
            <p className="p-desc">
              Watch on Smart Tvs, Playstation, Xbox, Chromecast, Apple TV,
              Blue-ray players, and more.
            </p>
          </div>
          <div className="MainContent-img">
            <img src={example} alt="showcase movies" />
          </div>
        </div>
      </div>
      <div className="second-border">
        <div className="downloading-example">
          <div className="downloading-icon">
            <p>Downloading...</p>
            <Loader />
          </div>
          <div className="download-desc">
            <h1 className="">Download your shows to watch on the go</h1>
            <p className="">
              Save your data and watch all your favorites offline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

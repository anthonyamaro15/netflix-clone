import React from "react";
import { useSelector } from "react-redux";
import MyListSingleMovie from "./MyListSingleMovie";

const MyList = () => {
  const { favoriteList } = useSelector((state) => state.favoriteListReducer);

  return (
    <div className="my-list">
      <h1>my list</h1>
      <div className="display-cards">
        {favoriteList.map((movie) => (
          <MyListSingleMovie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MyList;

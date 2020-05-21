export const addNewProp = (arr) => {
  const newArr = arr.map((movie) => {
    return {
      ...movie,
      joined: false,
    };
  });
  return newArr;
};

export const addedToFavoritesArray = (type, dispatch, newArr) => {
  if (type === "browse") {
    dispatch({ type: "MANIPULATED_POPULAR_DATA", payload: newArr });
  } else if (type === "tvshows") {
    dispatch({ type: "MANIPULATED_TV_POPULAR_DATA", payload: newArr });
  } else if (type === "movies") {
    dispatch({ type: "MANIPULATED_LATEST_RATED_DATA", payload: newArr });
  } else if (type === "latest") {
    dispatch({ type: "MANIPULATED_PLAYING_MOVIES_DATA", payload: newArr });
  }
};

export const addNewProp = (arr, category) => {
  const newArr = arr.map((movie) => {
    return {
      ...movie,
      joined: false,
      category: category,
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
  } else if (type === "results") {
    dispatch({ type: "MANIPULATED_RESULTS_MOVIES_DATA", payload: newArr });
  }
};

export const removeFromFavoritesAndUpdate = (type, dispatch, newArr) => {
  if (type === "browse") {
    dispatch({ type: "REMOVED_POPULAR_DATA_FAVORITE", payload: newArr });
  } else if (type === "tvshows") {
    dispatch({ type: "REMOVED_TV_POPULAR_DATA_FAVORITE", payload: newArr });
  } else if (type === "movies") {
    dispatch({ type: "REMOVED_LATEST_RATED_DATA_FAVORITE", payload: newArr });
  } else if (type === "latest") {
    dispatch({ type: "REMOVED_PLAYING_MOVIES_DATA_FAVORITE", payload: newArr });
  } else if (type === "results") {
    dispatch({ type: "REMOVED_RESULTS_MOVIES_DATA", payload: newArr });
  }
};

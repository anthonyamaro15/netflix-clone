// function to add new properties to data object when we get the data from the API
// added joined and category because thats how we base to add and remove from favorite list.
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

// important this takes care of adding movies to favorites array
// check the type to know from wich array get the favorite movie from
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

// important this takes care of removing favorite movies from favorite array
// check the type to know from which array to remove favorite movie from.
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

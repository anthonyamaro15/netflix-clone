import { initialValue } from "./initialValues";

export const ratedReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_RATED_DATA":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_RATED_DATA":
      return {
        ...state,
        latestRated: [...state.latestRated, ...action.payload],
        loading: false,
      };

    case "MANIPULATED_LATEST_RATED_DATA":
      return {
        ...state,
        latestRated: action.payload,
      };

    case "REMOVED_LATEST_RATED_DATA_FAVORITE":
      return {
        ...state,
        latestRated: action.payload,
      };

    case "NEXT_PAGE_LATEST":
      return {
        ...state,
        latestRatedPage: state.latestRatedPage + 1,
      };
    case "ERROR_RATED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

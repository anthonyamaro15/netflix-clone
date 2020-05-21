import { initialValue } from "./initialValues";

export const searchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        movieSearch: action.payload,
      };
    case "FETCHING_SEARCH":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_SEARCH_VALUES":
      // console.log();
      return {
        ...state,
        movieSearchResponse: action.payload,
        loading: false,
      };

    case "MANIPULATED_RESULTS_MOVIES_DATA":
      return {
        ...state,
        movieSearchResponse: action.payload,
      };

    case "REMOVED_RESULTS_MOVIES_DATA":
      return {
        ...state,
        movieSearchResponse: action.payload,
      };

    case "ERROR_SEARCH":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

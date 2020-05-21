import { initialValue } from "./initialValues";

export const tvPopularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_TV_DATA":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_TV_DATA":
      return {
        ...state,
        tvPopular: [...state.tvPopular, ...action.payload],
        loading: false,
      };

    case "MANIPULATED_TV_POPULAR_DATA":
      return {
        ...state,
        tvPopular: action.payload,
      };

    case "REMOVED_TV_POPULAR_DATA_FAVORITE":
      return {
        ...state,
        tvPopular: action.payload,
      };

    case "NEXT_PAGE_POPULAR":
      return {
        ...state,
        tvPopularPage: state.tvPopularPage + 1,
      };
    case "ERROR_TV":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

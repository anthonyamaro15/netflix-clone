import { initialValue } from "./initialValues";

export const popularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_DATA":
      return {
        ...state,
        popular: [...state.popular, ...action.payload],
        loading: false,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case "MANIPULATED_POPULAR_DATA":
      return {
        ...state,
        popular: action.payload,
      };

    case "REMOVED_POPULAR_DATA_FAVORITE":
      return {
        ...state,
        popular: action.payload,
      };

    case "NEXT_PAGE":
      return {
        ...state,
        popularPage: state.popularPage + 1,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

import { initialValue } from "./initialValues";

export const singleMovieReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_SINGLE_VIDEO":
      return {
        ...state,
        loading: true,
      };
    case "SAVING_SINGLE_VIDEO_ID":
      return {
        ...state,
        loading: false,
        singleMovie: action.payload,
      };
    case "ERROR_WHILE_FETCHING_SINGLE_VIDEO":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

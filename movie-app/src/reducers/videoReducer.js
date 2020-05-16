import { initialValue } from "./initialValues";

export const videoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_HEADER_VIDEO":
      return {
        ...state,
        loading: true,
      };
    case "SAVING_VIDEO_ID":
      return {
        ...state,
        loading: false,
        popularVideo: action.payload,
      };
    case "ERROR_WHILE_FETCHING_VIDEO":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { initialValue } from "./initialValues";

export const favoriteListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_FAVORITE_LIST":
      return {
        ...state,
        favoriteList: action.payload,
      };
    default:
      return state;
  }
};

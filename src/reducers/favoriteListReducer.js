import { initialValue } from "./initialValues";
import { GET_FAVORITE_LIST } from '../redux/actions';

export const favoriteListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_FAVORITE_LIST:
      return {
        ...state,
        favoriteList: action.payload,
      };
    default:
      return state;
  }
};

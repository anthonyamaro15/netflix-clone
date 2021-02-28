import { initialValue } from "./initialValues";
import { 
   FETCHING_RATED_DATA, 
   GETTING_RATED_DATA, 
   NEXT_PAGE_LATEST, 
   ERROR_RATED 
} from '../redux/actions';

export const ratedReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCHING_RATED_DATA:
      return {
        ...state,
        loading: true,
      };
    case GETTING_RATED_DATA:
      return {
        ...state,
        latestRated: [...state.latestRated, ...action.payload],
        loading: false,
      };
    case NEXT_PAGE_LATEST:
      return {
        ...state,
        latestRatedPage: state.latestRatedPage + 1,
      };
    case ERROR_RATED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

import { initialValue } from "./initialValues";
import { 
   SEARCH_MOVIE,
   FETCHING_SEARCH,
   GETTING_SEARCH_VALUES,
   ERROR_SEARCH
} from '../redux/actions';

export const searchReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        movieSearch: action.payload,
      };
    case FETCHING_SEARCH:
      return {
        ...state,
        loading: true,
      };
    case GETTING_SEARCH_VALUES:
      return {
        ...state,
        movieSearchResponse: action.payload,
        loading: false,
      };

    case ERROR_SEARCH:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

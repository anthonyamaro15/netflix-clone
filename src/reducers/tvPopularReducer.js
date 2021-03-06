import { initialValue } from "./initialValues";
import { 
   FETCHING_TV_DATA,
   GETTING_TV_DATA,
   NEXT_PAGE_POPULAR,
   ERROR_TV
} from '../redux/actions';

export const tvPopularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCHING_TV_DATA:
      return {
        ...state,
        loading: true,
      };
    case GETTING_TV_DATA:
      return {
        ...state,
        tvPopular: [...state.tvPopular, ...action.payload],
        loading: false,
      };

    case NEXT_PAGE_POPULAR:
      return {
        ...state,
        tvPopularPage: state.tvPopularPage + 1,
      };
    case ERROR_TV:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

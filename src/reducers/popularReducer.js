import { initialValue } from "./initialValues";
import { 
   FETCHING_DATA, 
   GETTING_DATA, 
   NEXT_PAGE, 
   ERROR 
} from '../redux/actions';

export const popularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        loading: true,
      };
    case GETTING_DATA:
       let movieData = action.payload[0].page ? [...action.payload.slice(1)] : action.payload;
      return {
        ...state,
        popular: [...state.popular, ...movieData],
        loading: false,
      };

    case NEXT_PAGE:
      return {
        ...state,
        popularPage: state.popularPage + 1,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

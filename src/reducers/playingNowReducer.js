import { initialValue } from "./initialValues";
import { FETCHING_LATEST, 
   GETTING_LATEST_DATA,
    NEXT_PAGE_PLAYING, 
   ERROR_LATEST 
} from '../redux/actions'

export const playingNowReducer = (state = initialValue, action) => {
  switch (action.type) {
    case FETCHING_LATEST:
      return {
        ...state,
        loading: true,
      };
    case GETTING_LATEST_DATA:
      return {
        ...state,
        playingMovie: [...state.playingMovie, ...action.payload],
        loading: false,
      };
    case NEXT_PAGE_PLAYING:
      return {
        ...state,
        playingMoviePage: state.playingMoviePage + 1,
      };
    case ERROR_LATEST:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

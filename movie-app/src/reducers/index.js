import { combineReducers } from "redux";
import {
  popularReducer,
  tvPopularReducer,
  ratedReducer,
  playingNowReducer,
  searchReducer,
} from "./popularReducer";

export const rootReducer = combineReducers({
  popularReducer,
  tvPopularReducer,
  ratedReducer,
  playingNowReducer,
  searchReducer,
});

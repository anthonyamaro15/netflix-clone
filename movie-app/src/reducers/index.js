import { combineReducers } from "redux";
import {
  popularReducer,
  tvPopularReducer,
  ratedReducer,
  playingNowReducer
} from "./popularReducer";

export const rootReducer = combineReducers({
  popularReducer,
  tvPopularReducer,
  ratedReducer,
  playingNowReducer
});

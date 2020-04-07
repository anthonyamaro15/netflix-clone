import { combineReducers } from "redux";
import { popularReducer } from "./popularReducer";
import { tvPopularReducer } from "./tvPopularReducer";
import { ratedReducer } from "./ratedReducer";
import { playingNowReducer } from "./playingNowReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  popularReducer,
  tvPopularReducer,
  ratedReducer,
  playingNowReducer,
  searchReducer,
});

import { combineReducers } from "redux";
import { popularReducer } from "./popularReducer";
import { tvPopularReducer } from "./tvPopularReducer";
import { ratedReducer } from "./ratedReducer";
import { playingNowReducer } from "./playingNowReducer";
import { searchReducer } from "./searchReducer";
import { videoReducer } from "./videoReducer";
import { singleMovieReducer } from "./singleMovieReducer";

export const rootReducer = combineReducers({
  popularReducer,
  tvPopularReducer,
  ratedReducer,
  playingNowReducer,
  searchReducer,
  videoReducer,
  singleMovieReducer,
});

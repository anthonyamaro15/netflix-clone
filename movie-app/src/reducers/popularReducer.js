const initialValue = {
  popular: [],
  tvPopular: [],
  latestRated: [],
  playingMovie: [],
  loading: false,
  error: "",
  favoriteList: [],
  popularPage: 1,
};

export const popularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_DATA":
      return {
        ...state,
        popular: [...state.popular, ...action.payload],
        loading: false,
      };
    case "NEXT_PAGE":
      return {
        ...state,
        popularPage: state.popularPage + 1,
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favoriteList: [...state.favoriteList, action.payload],
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const tvPopularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_TV_DATA":
      return {
        ...state,
        loading: false,
      };
    case "GETTING_TV_DATA":
      return {
        ...state,
        tvPopular: action.payload,
        loading: false,
      };
    case "ERROR_TV":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const ratedReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_RATED_DATA":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_RATED_DATA":
      return {
        ...state,
        latestRated: action.payload,
        loading: false,
      };
    case "ERROR_RATED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const playingNowReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_LATEST":
      return {
        ...state,
        loading: true,
      };
    case "GETTING_LATEST_DATA":
      return {
        ...state,
        playingMovie: action.payload,
        loading: false,
      };
    case "ERROR_LATEST":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const initialValue = {
  popular: [],
  tvPopular: {},
  latestRated: {},
  playingMovie: {},
  loading: false,
  error: ""
};

export const popularReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        loading: true
      };
    case "GETTING_DATA":
      return {
        ...state,
        popular: action.payload,
        loading: false
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

import { movieAction, addMovieToList, searchMovie } from "../actions/actions";

const movieSearch = {
  movies: [],
  movie: [],
};

const movieReducer = (state = movieSearch, action) => {
  switch (action.type) {
    case movieAction.ADD_MOVIE:
      return [...state, action.payload];
    case movieAction.SEARCH_MOVIE:
      return { ...state, movies: [...action.payload] };
    default:
      return state;
  }
};

export default movieReducer;

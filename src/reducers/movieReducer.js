import { movieAction } from "../actions/actions";

const movieSearch = {
  movies: [],
  movie: [],
};

const movieReducer = (state = movieSearch, action) => {
  switch (action.type) {
    case movieAction.ADD_MOVIE:
      const searchMovie = state.movies.filter(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,

        movie: [...state.movie, ...searchMovie],
      };

    case movieAction.SEARCH_MOVIE:
      return { ...state, movies: [...action.payload] };
    default:
      return state;
  }
};

export default movieReducer;

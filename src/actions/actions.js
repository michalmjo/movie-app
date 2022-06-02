export const movieAction = {
  ADD_MOVIE: "ADD_MOVIE",
  SEARCH_MOVIE: "SEARCH_MOVIE",
};

export const addMovieToList = (movies = []) => ({
  type: movieAction.ADD_MOVIE,
  payload: movies,
});

export const searchMovie = (movie = []) => ({
  type: movieAction.SEARCH_MOVIE,
  payload: movie,
});

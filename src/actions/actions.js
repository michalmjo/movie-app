export const movieAction = {
  ADD_MOVIE: "ADD_MOVIE",
  SEARCH_MOVIE: "SEARCH_MOVIE",
};

export const addMovieToList = (id) => ({
  type: movieAction.ADD_MOVIE,
  payload: { id },
});

export const searchMovie = (movie = []) => ({
  type: movieAction.SEARCH_MOVIE,
  payload: movie,
});

export const movieAction = {
  ADD_MOVIE: "ADD_MOVIE",
  SEARCH_MOVIE: "SEARCH_MOVIE",
  DELETE_MOVIE: "DELETE_MOVIE",
};

export const addMovieToList = (id) => ({
  type: movieAction.ADD_MOVIE,
  payload: { id },
});

export const searchMovies = (movie = []) => ({
  type: movieAction.SEARCH_MOVIE,
  payload: movie,
});

export const deleteFavMovie = (id) => ({
  type: movieAction.DELETE_MOVIE,
  payload: id,
});

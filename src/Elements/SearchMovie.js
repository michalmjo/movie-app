import { useEffect, useRef, useState } from "react";
import { searchMovies } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import MovieSearchList from "./MovieSearchList";
import "../styles/searchMovie.css";

const SearchMovie = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieList);
  const inputRef = useRef();

  useEffect(
    (prevState) => {
      if (value !== prevState && value !== "") {
        const movieSearch = async () => {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=3cbe5c4e11f13be89dfacaaeab649130&query=${value}`
          );
          const data = await response.json();
          dispatch(searchMovies(data.results));
        };
        movieSearch();
      }
    },
    [value, dispatch]
  );

  const { movies } = movie;

  const allMovie = movies.map((movie) => {
    return (
      <MovieSearchList
        key={movie.id}
        inputRef={inputRef}
        setValue={setValue}
        movies={movie}
      />
    );
  });

  const handleSearchMovie = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="list__search--movie">
      <p>{value === "" ? `Search Movie` : null}</p>
      <form className="list__search--movie-form" onChange={handleSearchMovie}>
        <input
          ref={inputRef}
          placeholder="Add title"
          className="list__search--movie-input"
          type="text"
        />
      </form>
      <div className="list__search--movie-list">
        {value === "" ? null : allMovie}
      </div>
    </div>
  );
};

export default SearchMovie;

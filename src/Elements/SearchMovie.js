import { useEffect, useState } from "react";
import { searchMovie } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import MovieSearchList from "./MovieSearchList";
import "../styles/searchMovie.css";

const SearchMovie = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movieList);

  useEffect(
    (prevState) => {
      if (value !== prevState && value !== "") {
        const movieSearch = async () => {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=3cbe5c4e11f13be89dfacaaeab649130&query=${value}`
          );
          const data = await response.json();
          dispatch(searchMovie(data.results));
          console.log(data.results);
        };
        movieSearch();
      }
    },
    [value]
  );

  const { movies } = movie;

  const allMovie = movies.map((movie) => {
    console.log(movie);
    return <MovieSearchList movies={movie} />;
  });

  const handleSearchMovie = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="list__search--movie">
      <form onChange={handleSearchMovie}>
        <input type="text" />
      </form>
      <div className="list__search--movie-list">
        <p>lista znalezionych filmow</p>
        {value === "" ? null : allMovie}
      </div>
    </div>
  );
};

export default SearchMovie;

import { apiKeyInfo } from "../api/apiInformation";
import "../styles/movieSearchList.css";
import { addMovieToList } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const MovieSearchList = ({ movies, setValue, inputRef }) => {
  const {
    title,
    original_title,
    poster_path,
    release_date,
    vote_average,
    backdrop_path,
    id,
  } = movies;
  const dispatch = useDispatch();
  const favListMovie = useSelector((state) => state.movieList.movie);
  const [exist, setExist] = useState(false);

  const showIsExist = () => {
    setExist(true);
    setTimeout(() => {
      setExist(false);
    }, 2000);
  };

  const handleAddMovieToFav = (id) => {
    if (id) {
      for (const movie of favListMovie) {
        if (id === movie.id) return showIsExist();
      }
      dispatch(addMovieToList(id));
      setValue("");
      inputRef.current.value = "";
    }
  };

  return (
    <div className="list__movie">
      <img
        className="list__movie-poster"
        src={`${apiKeyInfo.baseImgUrl}${poster_path || backdrop_path}`}
        alt={`${title}`}
      />
      <div className="list__movie--description">
        <p>{original_title}</p>
        <p>{release_date}</p>
        <p>Vote: {vote_average}</p>
      </div>
      <div className="list__movie--btn">
        {exist ? (
          <span className="list__movie--btn-msg active">
            Movie exist on your list
          </span>
        ) : null}
        <button onClick={() => handleAddMovieToFav(id)}>Add to list</button>
      </div>
    </div>
  );
};

export default MovieSearchList;

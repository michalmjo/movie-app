import { apiKeyInfo } from "../api/apiInformation";
import "../styles/movieSearchList.css";
import { addMovieToList } from "../actions/actions";
import { useDispatch } from "react-redux";

const MovieSearchList = ({ movies }) => {
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

  const handleAddMovieToFav = () => {
    dispatch(addMovieToList(id));
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
        <button onClick={() => handleAddMovieToFav(id)}>Add to list</button>
      </div>
    </div>
  );
};

export default MovieSearchList;

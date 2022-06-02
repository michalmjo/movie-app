import { apiKeyInfo } from "../api/apiInformation";
import "../styles/movieSearchList.css";

const MovieSearchList = ({ movies }) => {
  const {
    title,
    original_title,
    poster_path,
    release_date,
    vote_average,
    backdrop_path,
  } = movies;
  return (
    <div className="list__movie">
      <img
        className="list__movie-poster"
        src={`${apiKeyInfo.baseImgUrl}${poster_path || backdrop_path}`}
        alt={`${title}`}
      />
      <div>
        <p>{original_title}</p>
        <p>{release_date}</p>
        <p>Vote: {vote_average}</p>
      </div>
      <div>
        <button>Add to list</button>
      </div>
    </div>
  );
};

export default MovieSearchList;

import { apiKeyInfo } from "../api/apiInformation";
import "../styles/movieSearchList.css";
import { useSelector } from "react-redux";

const FavouriteList = () => {
  const movieList = useSelector((state) => state.movieList);
  const { movie } = movieList;

  const favListMovie = movie.map((movie) => {
    return (
      <div className="list__movie">
        <img
          className="list__movie-poster"
          src={`${apiKeyInfo.baseImgUrl}${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={`${movie.title}`}
        />
        <div className="list__movie--description">
          <p>{movie.original_title}</p>
          <p>{movie.release_date}</p>
          <p>Vote: {movie.vote_average}</p>
        </div>
        <div className="list__movie--btn">
          <button>Delete</button>
        </div>
      </div>
    );
  });

  return <>{favListMovie}</>;
};

export default FavouriteList;

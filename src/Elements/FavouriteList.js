import { apiKeyInfo } from "../api/apiInformation";
import "../styles/movieSearchList.css";
import { useSelector } from "react-redux";

const FavouriteList = () => {
  const movieList = useSelector((state) => state.movieList);
  const { movie } = movieList;
  console.log(movie);
  const {
    title,
    original_title,
    poster_path,
    release_date,
    vote_average,
    backdrop_path,
    id,
  } = movie;
  console.log(movie);

  const favListMovie = movie.map((movie) => {
    return (
      <div className="list__movie">
        <img
          className="list__movie-poster"
          src={`${apiKeyInfo.baseImgUrl}${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={`${title}`}
        />
        <div>
          <p>{movie.original_title}</p>
          <p>{movie.release_date}</p>
          <p>Vote: {movie.vote_average}</p>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    );
  });

  return <>{favListMovie};</>;
};

export default FavouriteList;

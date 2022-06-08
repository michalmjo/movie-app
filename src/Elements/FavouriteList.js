import { apiKeyInfo } from "../api/apiInformation";
import "../styles/movieSearchList.css";
import { useDispatch, useSelector } from "react-redux";
import "../styles/favouriteList.css";
import { deleteFavMovie } from "../actions/actions";

const FavouriteList = () => {
  const movieList = useSelector((state) => state.movieList);
  const { movie } = movieList;
  const dispatch = useDispatch();
  console.log(movie);

  const handleDeleteFavMovie = (id) => {
    dispatch(deleteFavMovie({ id }));
  };
  const favListMovie = movie.map((movie) => {
    return (
      <div key={movie.id} id={movie.id} className="list__movie list__fav">
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
          <button onClick={() => handleDeleteFavMovie(movie.id)}>Delete</button>
        </div>
      </div>
    );
  });

  return <>{favListMovie}</>;
};

export default FavouriteList;

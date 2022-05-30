import "../styles/row.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { apiKeyInfo } from "../api/apiInformation";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(`${apiKeyInfo.baseUrl}${fetchUrl}`);

      const data = await request.json();

      setMovies(data.results);
    };

    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const handleMovieInfoModal = (e) => {
    setIsModalOpen(true);

    console.log(e.target.alt);

    const fetchMovie = async () => {
      const response = await fetch(
        `${apiKeyInfo.searchOneMovie}${e.target.alt}`
      );
      const data = await response.json();
      setSelectedMovie(data);

      console.log(data);
    };

    fetchMovie();
  };

  const allMovies = movies.map((movie) => {
    return (
      ((isLargeRow && movie.poster_path) ||
        (!isLargeRow && movie.backdrop_path)) && (
        <>
          <div className="row__posters--poster">
            <img
              onClick={handleMovieInfoModal}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${apiKeyInfo.baseImgUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.original_title}
            />
            <p>
              {movie.name || movie.original_title} <br />
              <span>Vote: {movie.vote_average}</span>
            </p>
          </div>
        </>
      )
    );
  });

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">{allMovies}</div>
      </div>
      <Modal
        movie={selectedMovie}
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      ></Modal>
    </>
  );
};

export default Row;

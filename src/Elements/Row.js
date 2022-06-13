import "../styles/row.css";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { apiKeyInfo } from "../api/apiInformation";
import LoadingScreen from "./LoadingScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState([]);
  const posterRows = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(`${apiKeyInfo.baseUrl}${fetchUrl}`);

      const data = await request.json();

      setMovies(data.results);
      setTimeout(() => {
        setLoading(true);
      }, 500);
    };

    fetchData();
  }, [fetchUrl]);

  const handleMovieInfoModal = (e) => {
    setIsModalOpen(true);
    setSelectedMovie(e.target.alt);
  };

  const allMovies = movies.map((movie) => {
    return (
      ((isLargeRow && movie.poster_path) ||
        (!isLargeRow && movie.backdrop_path)) && (
        <div key={movie.id} className="row__posters--poster">
          <img
            onClick={handleMovieInfoModal}
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
      )
    );
  });

  const handleLeftScroll = () => {
    posterRows.current.scrollLeft =
      posterRows.current.scrollLeft - posterRows.current.clientWidth / 2 - 20;
  };
  const handleRigtScroll = () => {
    posterRows.current.scrollLeft =
      posterRows.current.scrollLeft + posterRows.current.clientWidth / 2 - 20;
  };

  return (
    <>
      {loading ? (
        <div className="row">
          <h2>{title}</h2>
          <div className="row__arrow">
            <span onClick={handleLeftScroll} className="row__arrow--scroll">
              <FontAwesomeIcon
                className="row__arrow--btn"
                icon={faArrowAltCircleLeft}
              />
            </span>
            <div ref={posterRows} className="row__posters">
              {allMovies}
            </div>
            <span onClick={handleRigtScroll} className="row__arrow--scroll">
              <FontAwesomeIcon
                className="row__arrow--btn"
                icon={faArrowAltCircleRight}
              />
            </span>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
      {isModalOpen && (
        <Modal
          movie={selectedMovie}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        ></Modal>
      )}
    </>
  );
};

export default Row;

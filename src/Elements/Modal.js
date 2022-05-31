import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { apiKeyInfo } from "../api/apiInformation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import "../styles/modal.css";

const Modal = ({ open, onClose, movie }) => {
  console.log(movie);
  const [modalMovie, setModalMovie] = useState([]);
  useEffect(() => {
    if (!open) return null;

    const newMovie = movie.replaceAll(" ", "+");

    const fetchMovie = async () => {
      const response = await fetch(
        `${apiKeyInfo.searchOneMovie}${newMovie.toLowerCase()}`
      );
      const data = await response.json();
      const newMovieTable = [...data.results].splice(0, 1);
      setModalMovie(newMovieTable);
    };

    fetchMovie();
  }, []);

  console.log(modalMovie);

  const clickedMovie = modalMovie.map((movie) => {
    return (
      <div className="modal__wrap" key={movie.id}>
        <div
          className="modal__wrap--poster"
          style={{
            backgroundImage: `url(
            ${apiKeyInfo.baseImgUrl}${movie.backdrop_path || movie.poster_path}
            )`,
          }}
        >
          <div className="modal__wrap--poster-Shadow"></div>
          <button className="play">
            <a
              href={`https://www.youtube.com/results?search_query=${
                movie.title || movie.original_title
              }`}
              target={"_blank"}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCirclePlay} className="play__btn" />
            </a>
          </button>
        </div>
        <h2 className="movie__name">{movie.title}</h2>
        <p className="description">{movie.overview}</p>
        <div className="movie__info">
          <div className="movie__info-release">{movie.release_date}</div>
        </div>
      </div>
    );
  });

  return ReactDom.createPortal(
    <>
      <div className="modal">
        {clickedMovie}
        <button className="modal__btn" onClick={onClose}>
          Back to main dashboard
        </button>
      </div>
    </>,
    document.getElementById("portalModal")
  );
};

export default Modal;

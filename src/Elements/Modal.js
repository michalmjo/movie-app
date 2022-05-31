import { useEffect, useState } from "react";
import ReactDom from "react-dom";
import { apiKeyInfo } from "../api/apiInformation";

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
      <div
        key={movie.id}
        className="modal__wrap"
        style={{
          backgroundImage: `url(
            ${apiKeyInfo.baseImgUrl}${movie.backdrop_path || movie.poster_path}
          )`,
        }}
      >
        <div className="modal__wrap-bottomShadow"></div>
        <p>{movie.title}</p>
      </div>
    );
  });

  return ReactDom.createPortal(
    <>
      <div className="modal">
        {clickedMovie}
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("portalModal")
  );
};

export default Modal;

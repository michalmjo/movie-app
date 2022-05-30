import "../styles/modal.css";
import { useEffect, useState } from "react";
import { apiKeyInfo } from "../api/apiInformation";

const Modal = ({ open, onClose, movie }) => {
  if (!movie) return;
  //   const movieTitle = movie.replaceAll(" ", "+");

  if (!open) return null;
  return (
    <>
      <div className="modal">
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default Modal;

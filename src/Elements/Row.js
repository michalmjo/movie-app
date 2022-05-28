import { useEffect, useState } from "react";
import { apiKeyInfo } from "../api/apiInformation";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(`${apiKeyInfo.baseUrl}${fetchUrl}`);

      const data = await request.json();

      setMovies(data.results);
    };

    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const allMovies = movies.map((movie) => {
    return (
      <img
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        src={`${apiKeyInfo.baseImgUrl}${
          isLargeRow ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
      />
    );
  });

  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        {allMovies}
      </div>
    </>
  );
};

export default Row;

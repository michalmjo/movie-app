import { v4 as uuid } from "uuid";
import { requests } from "../api/apiInformation";
import Row from "../Elements/Row";

const movieRequest = Object.values(requests);

const movieList = [
  { id: uuid, name: "ORGINALS MOVIE", isLargeRow: "true" },
  { id: uuid, name: "Trending Now" },
  { id: uuid, name: "Comedy Movies" },
  { id: uuid, name: "Horror Movies" },
  { id: uuid, name: "Romance Movies" },
  { id: uuid, name: "Documentaries" },
  { id: uuid, name: "Action Movies" },
];

const Main = () => {
  const rows = movieList.map((movie, id) => {
    return (
      <Row
        key={id}
        title={movie.name}
        fetchUrl={movieRequest[id]}
        isLargeRow={movie.isLargeRow && movie.isLargeRow}
      />
    );
  });

  return (
    <>
      <div className="CategoryFilms">Category</div>
      {rows}
      rows
    </>
  );
};

export default Main;

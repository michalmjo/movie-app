import { lazy, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Navigation from "../Elements/Navigation";
import { apiKeyInfo, requests } from "../api/apiInformation";
import "../styles/header.css";

const navigationElements = [
  {
    id: uuid(),
    name: "Movies",
  },
  {
    id: uuid(),
    name: "My List",
  },
];

const Header = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${apiKeyInfo.baseUrl}${requests.fetchNetflixOriginals}`
      );
      const data = await response.json();

      const index = Math.floor(Math.random() * data.results.length - 1);

      setMovie(data.results[index].backdrop_path);
    }
    fetchData();
  }, []);

  const navigation = navigationElements.map((nav) => (
    <Navigation key={nav.id} nav={nav} />
  ));
  return (
    <>
      <nav className="mainNavigation">
        <ul className="mainNavigation__list">{navigation}</ul>
      </nav>
      <section className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original${movie}`}
          alt="zdjecie"
          loading={lazy}
        />
        <h1 className="banner__title">Movie name</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit
          dolorem non ex dignissimos similique, ut hic unde aperiam sequi
          sapiente ducimus ullam aliquam explicabo natus, tenetur, id sint
          f81980ff410e46f422d64ddf3a56dddd facere?
        </p>
      </section>
    </>
  );
};

export default Header;

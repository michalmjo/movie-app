import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Navigation from "../Elements/Navigation";
import { apiKeyInfo, requests } from "../api/apiInformation";
import "../styles/header.css";

const navigationElements = [
  {
    id: uuid(),
    name: "Movies",
    path: "/",
  },
  {
    id: uuid(),
    name: "My List",
    path: "/list",
  },
];

const Header = () => {
  const truncate = (string, n = 150) => {
    return string?.length > n ? string.substr(0, n - 1) + `...` : string;
  };

  const [movie, setMovie] = useState();

  const [showMenu, setShowMenu] = useState();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${apiKeyInfo.baseUrl}${requests.fetchNetflixOriginals}`
      );
      const data = await response.json();

      const index = Math.floor(Math.random() * data.results.length - 1);

      setMovie(data.results[index]);
    }
    fetchData();
  }, []);

  const navigation = navigationElements.map((nav) => (
    <Navigation key={nav.id} nav={nav} />
  ));
  return (
    <>
      <nav className={`mainNavigation ${showMenu && "mainNavigation--bg"}`}>
        <ul className="mainNavigation__list">{navigation}</ul>
      </nav>
      <section className="banner">
        <div
          className="banner__pic banner__text"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          }}
        >
          <h1 className="banner__text-title">
            {movie?.name || movie?.orginal_name}
          </h1>

          <p className="banner__text-description">
            {truncate(movie?.overview)}{" "}
          </p>
        </div>
      </section>
    </>
  );
};

export default Header;

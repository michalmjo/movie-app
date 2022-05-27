import { v4 as uuid } from "uuid";
import Navigation from "../Elements/Navigation";

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
  const navigation = navigationElements.map((nav) => (
    <Navigation key={nav.id} nav={nav} />
  ));
  return (
    <>
      <nav className="mainNavigation">
        <ul className="mainNavigation__list">{navigation}</ul>
      </nav>
      <section className="banner">
        <h1 className="banner__title">Movie name</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam impedit
          dolorem non ex dignissimos similique, ut hic unde aperiam sequi
          sapiente ducimus ullam aliquam explicabo natus, tenetur, id sint
          facere?
        </p>
      </section>
    </>
  );
};

export default Header;

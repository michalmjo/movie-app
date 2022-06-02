import { NavLink } from "react-router-dom";

const Navigation = ({ nav }) => {
  console.log(nav);
  const { name, path } = nav;
  return (
    <>
      <li>
        <NavLink className="navigation__link" to={path}>
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default Navigation;

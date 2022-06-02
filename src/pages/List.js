import "../styles/list.css";
import SearchMovie from "../Elements/SearchMovie";
import FavouriteList from "../Elements/FavouriteList";

const List = () => {
  return (
    <>
      <div className="list">
        <div className="list__search">
          <h3>My favorites</h3>
          <SearchMovie />
        </div>
        <div className="list__favorites">
          <div className="list__favorites--movie">
            <h4>My movies</h4>
            <FavouriteList />
          </div>
        </div>
      </div>
    </>
  );
};

export default List;

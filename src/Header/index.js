import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const Header = () => {

  const navigate = useNavigate();
  const [searchMovieName, setSearchMovieName] = useState("");

  const fetchData = async () => {
    navigate(`/search/${searchMovieName}`);
  };

  const onSubmitMovie = (event) => {
    event.preventDefault();
    fetchData();
  };

  const onClickSearch = () => {
    fetchData();
  };

  return (
    <div className="header-container">
      <NavLink to="/" className="menu-item">
        <h1 className="header-heading ">MovieDb</h1>
      </NavLink>

      <form className="right" onSubmit={onSubmitMovie}>
        <div className="menu">
          <NavLink to="/" className="menu-item" activeClassName="active">
            Popular
          </NavLink>
          <NavLink
            to="/top-rated"
            className="menu-item"
            activeClassName="active"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            className="menu-item"
            activeClassName="active"
          >
            Upcoming
          </NavLink>
        </div>
        <div className="search-container">
          <input
            type="search"
            value={searchMovieName}
            onChange={(event) => setSearchMovieName(event.target.value)}
            className="input-container"
            placeholder="Movie Name"
          />
          <button className="search-button" onClick={onClickSearch}>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;

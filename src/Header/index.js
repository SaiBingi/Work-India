import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./index.css";

const Header = () => {

  const navigate = useNavigate();
  const [searchMovieName, setSearchMovieName] = useState("");

  const onSubmitMovie = (event) => {
    event.preventDefault();
    if (searchMovieName !== "") {
        navigate(`/search/${searchMovieName}`);
    }
  };

  const onClickSearch = () => {
    if (searchMovieName !== "") {
        navigate(`/search/${searchMovieName}`);
    }
  };

  return (
    <div className="header-container">
      <NavLink to="/" className="menu-item">
        <h1 className="header-heading ">MovieDb</h1>
      </NavLink>

      <form className="right" onSubmit={onSubmitMovie}>
        <div className="desktop-menu">
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
        <Popup
          trigger={
            <button className="mobile-menu-trigger">&#9776;</button>
          }
          position="bottom right"
          closeOnDocumentClick
        >
          <div className="mobile-menu">
            <NavLink
              to="/"
              className="menu-item active-item"
            >
              Popular
            </NavLink>
            <NavLink
              to="/top-rated"
              className="menu-item active-item"
            >
              Top Rated
            </NavLink>
            <NavLink
              to="/upcoming"
              className="menu-item active-item"
            >
              Upcoming
            </NavLink>
          </div>
        </Popup>
        <div className="search-container">
          <input
            type="search"
            value={searchMovieName}
            onChange={(event) => setSearchMovieName(event.target.value)}
            className="input-container"
            placeholder="Search Movie Name"
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














// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
// import "./index.css";

// const Header = () => {
//   const navigate = useNavigate();
//   const [searchMovieName, setSearchMovieName] = useState("");

//   const onSubmitMovie = (event) => {
//     event.preventDefault();
//     if (searchMovieName !== "" && event.key === "Enter") {
//       navigate(`/search/${searchMovieName}`);
//     }
//   };

//   const onClickSearch = () => {
//     if (searchMovieName !== "") {
//       navigate(`/search/${searchMovieName}`);
//     }
//   };

//   return (
//     <div className="header-container">
//       <NavLink to="/" className="menu-item">
//         <h1 className="header-heading">MovieDb</h1>
//       </NavLink>

//       <div className="menu">
//         {/* Desktop View */}
//         <div className="desktop-menu">
//           <NavLink
//             to="/"
//             className="menu-item"
//             activeClassName="active"
//           >
//             Popular
//           </NavLink>
//           <NavLink
//             to="/top-rated"
//             className="menu-item"
//             activeClassName="active"
//           >
//             Top Rated
//           </NavLink>
//           <NavLink
//             to="/upcoming"
//             className="menu-item"
//             activeClassName="active"
//           >
//             Upcoming
//           </NavLink>
//         </div>

//         {/* Mobile View */}
//         <Popup
//           trigger={
//             <button className="mobile-menu-trigger">&#9776;</button> // Hamburger menu icon
//           }
//           position="bottom right"
//           closeOnDocumentClick
//         >
//           <div className="mobile-menu">
//             <NavLink
//               to="/"
//               className="menu-item"
//               activeClassName="active"
//             >
//               Popular
//             </NavLink>
//             <NavLink
//               to="/top-rated"
//               className="menu-item"
//               activeClassName="active"
//             >
//               Top Rated
//             </NavLink>
//             <NavLink
//               to="/upcoming"
//               className="menu-item"
//               activeClassName="active"
//             >
//               Upcoming
//             </NavLink>
//           </div>
//         </Popup>
//       </div>

//       <form className="right" onSubmit={onSubmitMovie}>
//         <div className="search-container">
//           <input
//             type="search"
//             value={searchMovieName}
//             onChange={(event) => setSearchMovieName(event.target.value)}
//             className="input-container"
//             placeholder="Movie Name"
//           />
//           <button className="search-button" onClick={onClickSearch}>
//             Search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Header;

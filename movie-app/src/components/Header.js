import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <div className="logo">
          <h2>Movie App</h2>
        </div>
        <nav>
          <NavLink to="/home">home</NavLink>
          <NavLink to="/tvshows">TV shows</NavLink>
          <NavLink to="/movies">movies</NavLink>
          <NavLink to="/mylist">my list</NavLink>
        </nav>
      </header>
      <div className="search">
        <div className="icon">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Header;

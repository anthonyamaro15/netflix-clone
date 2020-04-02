import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import NavForm from "./NavForm";

const Header = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
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
      <div className={showForm ? "search showForm" : "search"}>
        <div className="icon" onClick={toggleForm}>
          <FaSearch />
        </div>
        {showForm ? <NavForm /> : ""}
      </div>
    </div>
  );
};

export default Header;

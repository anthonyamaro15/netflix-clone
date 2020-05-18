import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";

import NavForm from "./NavForm";

const Navbar = () => {
  const [showForm, setShowForm] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 3) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY === 0) {
        setScrolling(false);
      }
    });
    return () => setScrolling(false);
  }, [setScrolling]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const isUserScrolling = scrolling
    ? "navbar-container black"
    : "navbar-container";

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={isUserScrolling}>
      <header id="top">
        <div className="logo">
          <h2>
            <NavLink to="/">TMovies</NavLink>
          </h2>
        </div>
        <nav>
          <NavLink exact to="/browse" activeClassName="active">
            home
          </NavLink>
          <NavLink to="/tvshows" activeClassName="active">
            TV shows
          </NavLink>
          <NavLink to="/movies" activeClassName="active">
            movies
          </NavLink>
          <NavLink to="/latest" activeClassName="active">
            Latest
          </NavLink>
          <NavLink to="/mylist" activeClassName="active">
            my list
          </NavLink>
        </nav>
      </header>
      <div className="search-logout">
        <div className={showForm ? "search showForm" : "search"}>
          <div className="icon" onClick={toggleForm}>
            <FaSearch />
          </div>
          {showForm ? <NavForm setShowForm={setShowForm} /> : ""}
        </div>
        <button onClick={logout}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
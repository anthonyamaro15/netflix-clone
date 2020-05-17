import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link className="logo" to="/">
        TMovies
      </Link>
      <nav className="nav-links">
        <NavLink to="/login" activeClassName="active">
          log in
        </NavLink>
        <NavLink to="/signup" activeClassName="active">
          sign up
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

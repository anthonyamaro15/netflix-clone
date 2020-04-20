import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <h2>movie app</h2>
      <nav className="nav-links">
        <NavLink to="/login">log in</NavLink>
        <NavLink to="/signup">sign up</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        🏠 Dashboard
      </NavLink>
      <NavLink
        to="/apartments"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Apartments
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Add Apartment
      </NavLink>
      <NavLink
        to="/complaints"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Complaints
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Reviews
      </NavLink>
    </nav>
  );
};

export default Navbar;

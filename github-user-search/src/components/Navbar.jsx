import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#24292e",
        color: "#fff",
      }}
    >
      {/* Logo / Title */}
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>GitHub Search</h1>

      {/* Navigation Links */}
      <div>
        <NavLink to="/" style={getLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/search" style={getLinkStyle}>
          Search
        </NavLink>
        <NavLink to="/about" style={getLinkStyle}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

// Dynamic styles for NavLink
const getLinkStyle = ({ isActive }) => ({
  color: isActive ? "#58a6ff" : "#fff", // Blue if active, white otherwise
  textDecoration: isActive ? "underline" : "none",
  marginLeft: "1.5rem",
  fontWeight: isActive ? "bold" : "500",
});

export default Navbar;

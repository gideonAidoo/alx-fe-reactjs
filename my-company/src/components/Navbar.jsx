import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "1rem",
        backgroundColor: "#f4f4f4", 
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "1rem",
          listStyle: "none",
          justifyContent: "center", 
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

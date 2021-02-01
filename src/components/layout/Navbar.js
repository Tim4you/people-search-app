import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <Link to="/homepage">
        <h1>
          <i className="fas fa-arrow-alt-circle-right" /> People Finder
        </h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Search</Link>
        </li>
        <li>
          <Link to="/homepage">Home</Link>
        </li>
        {/* <li>
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;

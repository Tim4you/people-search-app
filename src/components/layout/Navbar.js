import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={"fab fa-github"} /> People Finder
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

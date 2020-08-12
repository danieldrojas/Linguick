import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper navbar">
          <Link to="./" id="logo">
            Linguick
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="./signup">Sign Up</Link>
            </li>
            <li>
              <Link to="./user">Dashboard</Link>
            </li>
            <li>
              <Link to="./leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

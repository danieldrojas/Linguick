import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="./">Linguick</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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

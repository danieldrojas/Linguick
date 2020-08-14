import React from "react";
import { Link } from "react-router-dom";

const LoggedInNav = () => {
  const handleLogout = (event) => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <li>
        <Link to="/user">Dashboard</Link>
      </li>
      <li>
        <Link to="/leaderboard">Leaderboard</Link>
      </li>
      <li>
        <Link onClick={handleLogout} to="/login">
          Log out
        </Link>
      </li>
    </div>
  );
};

export default LoggedInNav;

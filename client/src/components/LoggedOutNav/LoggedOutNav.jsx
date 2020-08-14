import React from "react";
import { Link } from "react-router-dom";

const LoggedOutNav = () => {
  return (
    <div>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </div>
  );
};

export default LoggedOutNav;

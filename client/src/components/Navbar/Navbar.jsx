import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }


 handleLogout = (event) => {
   localStorage.clear();
   window.location.href = "/"

  }
 

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper navbar">
            <a
              href="#"
              data-target="slide-out"
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>

            <Link to="/" id="logo">
              Linguick
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/user">Dashboard</Link>
              </li>
              <li>
                <Link to="/leaderboard">Leaderboard</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Router>
        <ul id="slide-out" className="sidenav">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/user">Dashboard</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>
        </ul>
        </Router>
      </>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LoggedInNav from "../LoggedInNav/LoggedInNav";
import LoggedOutNav from "../LoggedOutNav/LoggedOutNav";

class Navbar extends Component {
  componentDidMount() {
    // allow the sandwich menu to appear on smaller screens
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper navbar">
            <a
              href="/"
              data-target="slide-out"
              className="sidenav-trigger right"
            >
              <i className="material-icons" id="menu">
                menu
              </i>
            </a>
            <Link to="/" id="logo">
              Linguick
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* check if user is logged in and display the corresponding navbar */}
              {this.props.isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
            </ul>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          {/* check if user is logged in and display the corresponding navbar */}
          {this.props.isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </ul>
      </>
    );
  }
}

export default Navbar;

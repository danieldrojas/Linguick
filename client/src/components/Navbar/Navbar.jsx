import React,{Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component{
  componentDidMount() {
    const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
          var elems = document.querySelectorAll('.sidenav');
          var instances = M.Sidenav.init(elems, {});
        });
      }
      render(){

      
  return (
    <div>
      <nav>
        <div className="nav-wrapper navbar">
          <a href="#" data-target="slide-out" class="sidenav-trigger right">
            <i class="material-icons">menu</i>
          </a>
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
      <ul id="slide-out" class="sidenav">
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
  );
}
};

export default Navbar;

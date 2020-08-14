import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <h1>Get ready to test your skills with the Korean alphabet!</h1>
      <Link to="/login">
        <button className="page-btn">Get started!</button>
      </Link>
    </div>
  );
};

export default Home;

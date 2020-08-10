import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Get ready to test your skills with the Korean alphabet!</h1>
      <Link to="/quiz">
        <button>Get started!</button>
      </Link>
    </div>
  );
};

export default Home;

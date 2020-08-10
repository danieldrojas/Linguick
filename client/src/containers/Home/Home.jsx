import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <container>
      <h1>Get ready to test your skills with the Korean alphabet!</h1>
      <Link to="/quiz">
        <button>Get started!</button>
      </Link>
    </container>
  );
};

export default Home;

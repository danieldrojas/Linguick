import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1>Log in</h1>
      <form>
          <ul>
        <li>Username: <input type="text"/></li>
        <li>Password: <input type="password"/></li>
        </ul>
        <button>Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up.</Link> </p>
    </div>
  );
};

export default Login;

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h1>Log in</h1>
      <div className="row">
        <div className="col s3"></div>
        <div className="col s6 signupCol">
          <form>
            <ul>
              <li>
                <input type="text" name="username" placeholder="Username" />
              </li>
              <li>
                <input type="password" name="password" placeholder="Password" />
              </li>
            </ul>
            <button className="page-btn">Log In</button>
          </form>
          <p>
            Don't have an account? <Link to="/signup">Sign up.</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

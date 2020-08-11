import React from "react";
import { Link } from "react-router-dom";
import './Signup.css'

const Signup = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="row">
        <div className="col s3"></div>
        <div className="col s6 signupCol">
          <form>
            <ul>
              <li>
                <input type="text" name="username" placeholder="Username"/>
              </li>
              <li>
                <input type="text" name="email" placeholder="Email" />
              </li>
              <li>
                <input type="password" name="password" placeholder="Password"/>
              </li>
              <li>
                <input type="password" name="confirmPassword" placeholder="Confirm Password"/>
              </li>
            </ul>
            <button>Create Account</button>
          </form>
        </div>
      </div>
      <p>
        Already have an account? <Link to="/login">Log in.</Link>
      </p>
    </div>
  );
};

export default Signup;

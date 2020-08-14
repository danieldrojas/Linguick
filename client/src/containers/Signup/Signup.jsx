import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import API from "../../util/API";

const Signup = () => {
  const [formObject, setFormObject] = useState({
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
  });
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!(formObject.password === formObject.passwordCheck)) {
      alert("The passwords need to match");
    } else if (formObject.username && formObject.email && formObject.password) {
      API.savePost({
        username: formObject.username,
        email: formObject.email,
        password: formObject.password,
      })
        .then(() => {
          setFormObject({
            username: "",
            email: "",
            password: "",
            passwordCheck: "",
          });
          alert("Sucessfully Created user");
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <div className="row">
        <div className="col s3"></div>
        <div className="col s6 signupCol">
          <form>
            <ul>
              <li>
                <input
                  type="text"
                  name="username"
                  value={formObject.username}
                  placeholder="Username"
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <input
                  type="text"
                  name="email"
                  value={formObject.email}
                  placeholder="Email"
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <input
                  type="password"
                  name="password"
                  value={formObject.password}
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </li>
              <li>
                <input
                  type="password"
                  name="passwordCheck"
                  value={formObject.passwordCheck}
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              </li>
            </ul>
            <button className="page-btn" onClick={handleFormSubmit}>
              Create Account
            </button>
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

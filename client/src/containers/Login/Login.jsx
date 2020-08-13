import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../../util/API";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("front end username is " + email);
    console.log("front end password is " + password);

    API.getUserLogin({
      email,
    })
      .then((dbUser) => {
        console.log("this is my dbUser ", dbUser.data);
        if (!dbUser.error) {
          // dbUser.data.password === password ? props.history.push : alert("Email or password invalid")
          props.history.push("./Selectquiz");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <h1>Log in</h1>
      <div class="row">
        <div className="col s3"></div>
        <div className="col s6 signupCol">
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <input
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </li>
              <li>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </li>
            </ul>
            <button className="page-btn">Log In</button>
          </form>
        </div>
      </div>
      <p>
        Don't have an account? <Link to="/signup">Sign up.</Link>{" "}
      </p>
    </div>
  );
};

export default Login;

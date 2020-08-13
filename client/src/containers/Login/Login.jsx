import React, { useState} from "react";
import {Link} from "react-router-dom";
import API from "../../util/API";

const Login = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    console.log("front end username is " + email);
    console.log("front end password is " + password);

    API.getUserLogin({
      email
    })
      .then((dbUser) => {
        if (!dbUser.data.error && dbUser.data.data.password === password) {
       props.history.push("./Selectquiz")
        } else {
          alert("Password or email invalid")
        }

      }).catch(err => {
        console.log(err)
      })  
}
  
  return (
    <div className="container">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit}>
          <ul>
          <li>Email: <input
            type="text"
            name="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}

          /></li>
          <li>Password: <input type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}/></li>
        </ul>
        <button>Log In</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up.</Link> </p>
    </div>
  );
};

export default Login;

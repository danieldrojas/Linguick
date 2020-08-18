import React, { useState, useContext} from "react";
import { Link } from "react-router-dom";
import API from "../../util/API";
import  UserContext from "../../util/UserContext"


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const { user, setUser} = useContext(UserContext)
 
  

const handleSubmit = async (e) => {
    e.preventDefault();


//passing an obj with email and password to verify user in backend
    API.getUserLogin({
      email,
      password
    })
      .then((dbUser) => {
     //if we get and answer continue
        if (!dbUser.data.error) {
//set the user state to the user back from database
          setUser(dbUser.data.data)
          //saving the user in localstorage
            localStorage.setItem("UserInfo", JSON.stringify(dbUser.data.data))      
 
          window.location.reload();
        } else {
          alert("Password or email invalid")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    < div className = "container" >
      <h1>Log in</h1>
      <div className="row">

        <div className="col s3"></div>
        <div className="col s6 signupCol">
          <form onSubmit={ (e) => {
           handleSubmit(e);
          }}>
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

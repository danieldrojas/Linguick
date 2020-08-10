import React from "react";

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
      <p>Don't have an account? Sign up.</p>
    </div>
  );
};

export default Login;

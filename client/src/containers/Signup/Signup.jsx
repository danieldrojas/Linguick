import React from "react";

const Signup = () => {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form>
        <ul>
          <li>
            Username: <input type="text" />
          </li>
          <li>
            Email: <input type="text" />
          </li>
          <li>
            Password: <input type="password" />
          </li>
          <li>
            Confirm Password: <input type="password" />
          </li>
        </ul>
        <button>Create Account</button>
      </form>
      <p>Already have an account? Log in.</p>
    </div>
  );
};

export default Signup;

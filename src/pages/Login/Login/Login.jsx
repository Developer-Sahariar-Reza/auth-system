import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button className="common-button">Login</button>
      </form>
      <p className="error-message">Error Message</p>
      <p className="login-message">
        New here? <Link to="/register"> Create An Account</Link>
      </p>
    </div>
  );
};

export default Login;

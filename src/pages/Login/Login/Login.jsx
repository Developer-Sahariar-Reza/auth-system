import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";

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
      <div className="social-media-login">
        <button className="google">
          <span>
            <FaGoogle />
          </span>{" "}
          <span> Login with Google</span>
        </button>

        <button className="facebook">
          <span>
            <FaFacebook />
          </span>{" "}
          <span> Login with Facebook</span>
        </button>

        <button className="github">
          <span>
            <FaGithub />
          </span>{" "}
          <span> Login with Github</span>
        </button>
      </div>
      <div>
        <p className="error-message">Error Message</p>
        <p className="login-message">
          New here? <Link to="/register"> Create An Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

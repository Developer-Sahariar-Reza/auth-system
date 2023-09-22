import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";

const Register = () => {
  return (
    <div className="register">
      <h1>Register Page</h1>

      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm password"
            required
          />
        </div>
        <button className="common-button">Register</button>
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
        <p className="error-message">Error</p>
        <p className="login-message">
          Already have an Account? <Link to="/login">Please Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

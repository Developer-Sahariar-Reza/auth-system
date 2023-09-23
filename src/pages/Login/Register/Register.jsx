import React, { useContext } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        form.reset();
        toast.success("Registration Successful");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="register">
      <h1>Register Page</h1>

      <form onSubmit={handleRegister}>
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
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

import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa6";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handleSignIn}>
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

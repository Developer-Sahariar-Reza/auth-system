import React from "react";
import "./NavigationMenu.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationMenu = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="nav-container">
      <ul>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </ul>

      {/* profile-container  */}
      <div className="profile-container">
        <p>{user ? <span>{user.displayName}</span> : "Profile"}</p>
        {user ? (
          <button className="common-button">Logout</button>
        ) : (
          <Link to="/login">
            <button className="common-button">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavigationMenu;

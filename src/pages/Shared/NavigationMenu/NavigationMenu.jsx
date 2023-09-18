import React from "react";
import "./NavigationMenu.css";
import { NavLink } from "react-router-dom";

const NavigationMenu = () => {
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
                to="/login"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
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
        <p>Profile Name</p>
        <button className="common-button">Login</button>
      </div>
    </nav>
  );
};

export default NavigationMenu;

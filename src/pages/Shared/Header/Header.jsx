import React from "react";
import "./Header.css";
import logo from "../../../assets/icon/logo.svg";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <header>
      {/* logo and nav  */}
      <section className="logo-and-nav-container">
        {/* logo container  */}
        <div className="logo-container">
          <img src={logo} alt="" />
          <h1>THE NEWS BENGAL</h1>
        </div>

        {/* navigation container */}
        <NavigationMenu />
      </section>

      {/* slogan, time & breaking news */}
      <section>
        <div className="slogan">
          <h3>The News Bengal: Your Source, Your Voice!</h3>
        </div>
        <div className="time"></div>
        <div className="breaking-news"></div>
      </section>
    </header>
  );
};

export default Header;

import React from "react";
import "./Header.css";
import logo from "../../../assets/icon/logo.svg";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import moment from "moment";
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

        <div className="time">
          <h4>Today: {moment().format("dddd, MMMM Do, YYYY")}</h4>
        </div>

        <div className="breaking-news-container">
          <h4>Latest</h4>
          <Marquee
            className="breaking-newses"
            speed={100}
            gradient={true}
            pauseOnHover={true}
          >
            <p>
              Dengue deaths, patients on the rise as local govt can't control!!!
            </p>

            <p>
              China flies 103 military planes toward Taiwan in a new high of
              activity!!!
            </p>

            <p>Dhaka Elevated Expressway: BRTC bus service kicks off!!!</p>

            <p>EU fines TikTok 345 million euros over child data!!!</p>
          </Marquee>
        </div>
      </section>
    </header>
  );
};

export default Header;

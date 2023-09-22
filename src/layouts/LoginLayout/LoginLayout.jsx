import React from "react";
import "./LoginLayout.css";
import Header from "../../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <Header />
      <div className="log-reg-layout">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;

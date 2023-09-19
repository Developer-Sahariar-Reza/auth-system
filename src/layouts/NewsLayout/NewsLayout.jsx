import React from "react";
import "./NewsLayout.css";
import Header from "../../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header />
      <div className="news-content">
        <Outlet />
      </div>
    </div>
  );
};

export default NewsLayout;

import React from "react";
import "./MainLayout.css";
import Header from "../../pages/Shared/Header/Header";
import CategoriesLayout from "../../pages/Shared/CategoriesLayout/CategoriesLayout";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="category">
          <CategoriesLayout />
        </div>
        <div className="news">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

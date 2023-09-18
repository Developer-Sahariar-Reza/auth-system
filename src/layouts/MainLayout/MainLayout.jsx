import React from "react";
import "./MainLayout.css";
import Header from "../../pages/Shared/Header/Header";
import CategoriesLayout from "../../pages/Shared/CategoriesLayout/CategoriesLayout";
import NewsLayout from "../../pages/Shared/NewsLayout/NewsLayout";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="category">
          <CategoriesLayout />
        </div>
        <div className="news">
          <NewsLayout />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

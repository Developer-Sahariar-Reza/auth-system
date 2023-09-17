import React from "react";
import "./MainLayout.css";
import Header from "../../pages/Shared/Header/Header";
import LeftNav from "../../pages/Shared/LeftNav/LeftNav";
import RightNav from "../../pages/Shared/RightNav/RightNav";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="leftNav">
          <LeftNav />
        </div>
        <div className="rightNav">
          <RightNav />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

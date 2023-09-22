import React from "react";
import "./News.css";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const News = () => {
  const news = useLoaderData();
  const { _id, image_url, category_id, title, details } = news;
  return (
    <div className="news-details-container">
      <div className="news-details-image">
        <img src={image_url} alt="" />
      </div>
      <div className="news-info">
        <h1>{title}</h1>
        <p>{details}</p>
        <Link to={`/category/${category_id}`}>
          <button className="common-button">
            <FaArrowLeftLong /> <span>All News in this Category</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default News;

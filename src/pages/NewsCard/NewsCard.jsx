import React from "react";
import "./NewsCard.css";
import { Link } from "react-router-dom";
import { FaBookmark, FaShareNodes, FaEye } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news }) => {
  const { _id, rating, author, title, details, image_url, total_view } = news;
  return (
    <div className="news-card">
      <div className="author-details">
        <div className="author">
          <div>
            <img src={author.img} alt="" />
          </div>
          <div>
            <h5>{author.name}</h5>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div>
          <span>
            <FaBookmark />
          </span>
          <span>
            <FaShareNodes />
          </span>
        </div>
      </div>
      <div className="news-details">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div>
          <img src={image_url} alt="" />
        </div>
        <div className="details">
          <p>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </>
            )}
          </p>
        </div>
      </div>
      <div className="news-footer">
        <div>
          <Rating style={{ maxWidth: 140 }} value={rating.number} readOnly />
          <span>{rating.number}</span>
        </div>
        <div>
          <span>
            <FaEye />
          </span>
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

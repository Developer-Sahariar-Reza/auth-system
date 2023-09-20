import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../../NewsCard/NewsCard";

const Categories = () => {
  const categoryNews = useLoaderData();
  return (
    <div>
      <h2>Total News: {categoryNews.length}</h2>
      {categoryNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Categories;

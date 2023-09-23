import React, { useEffect, useState } from "react";
import "./CategoriesLayout.css";
import { Link } from "react-router-dom";

const CategoriesLayout = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://the-news-bengal-server-iglhew7k8-developer-sahariar-reza.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1 className="category-title">News Categories</h1>
      {categories.map((category) => (
        <p className="category-list" key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default CategoriesLayout;

import React, { useEffect, useState } from "react";
import "./LeftNav.css";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h1 className="left-nav-title">All Categories</h1>
      {categories.map((category) => (
        <li className="category-name" key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default LeftNav;

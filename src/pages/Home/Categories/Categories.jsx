import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Category: {id}</h1>
    </div>
  );
};

export default Categories;

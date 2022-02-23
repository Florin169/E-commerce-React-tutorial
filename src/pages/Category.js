import React from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const items = useSelector((items) => items.shop);

  return <div>Category</div>;
};

export default Category;

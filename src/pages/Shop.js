import React from "react";
import { Route, useParams } from "react-router-dom";
import CollectionOverview from "../components/CollectionOverview";
import Category from "./Category";
import { useSelector } from "react-redux";

const Shop = ({ match }) => {
  const items = useSelector((items) => items.shop.data);
  console.log(items[0].routeName);

  return (
    <div className="p-10 w-full h-full">
      <Route path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/`} component={Category} />
    </div>
  );
};

export default Shop;

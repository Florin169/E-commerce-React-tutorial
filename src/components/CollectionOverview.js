import React from "react";
import PreviewCollection from "../components/PreviewCollection";
import { useSelector } from "react-redux";

const CollectionOverview = () => {
  const collections = useSelector((state) => state.shop.data);

  return (
    <div>
      {collections.map(({ id, title, items }) => {
        return <PreviewCollection key={id} title={title} items={items} />;
      })}
    </div>
  );
};

export default CollectionOverview;

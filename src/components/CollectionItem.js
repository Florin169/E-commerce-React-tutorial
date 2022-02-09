import React from "react";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="w-full h-128 p-2">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="w-full h-full bg-no-repeat bg-center bg-cover"
      />
      <div className="flex items-center justify-between">
        <span>{name}</span>
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;

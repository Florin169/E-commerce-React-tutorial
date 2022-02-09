import React from "react";
import CollectionItem from "./CollectionItem";

const PreviewCollection = ({ items, title }) => {
  return (
    <div className=" w-full mb-10">
      <h1 className="font-bold ">Title {title.toUpperCase()}</h1>
      <div className=" flex w-full">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return (
              <div key={item.id} className="w-full">
                <CollectionItem
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default PreviewCollection;

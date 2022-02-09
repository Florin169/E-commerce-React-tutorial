import React, { useState } from "react";
import PreviewCollection from "../components/PreviewCollection";
import data from "../shopData";

const Shop = () => {
  const [collections] = useState(data);
  console.log(collections);

  return (
    <div className="p-10 w-full h-full">
      {collections.map(({ id, title, items }) => {
        return <PreviewCollection key={id} title={title} items={items} />;
      })}
    </div>
  );
};

export default Shop;

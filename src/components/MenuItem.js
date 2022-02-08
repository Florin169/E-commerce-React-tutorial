import React from "react";
import { withRouter } from "react-router-dom";

const MenuItem = ({ item, history, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${item.linkUrl}`)}
      className={`${
        item.id > 3 ? "w-1/2 h-128" : "w-1/3 h-80"
      }   border flex items-center justify-center bg-cover bg-center  mb-4 `}
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    >
      <div className=" w-36 h-24 border flex flex-col items-center justify-center bg-gray-200/50 ">
        <h1>{item.title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);

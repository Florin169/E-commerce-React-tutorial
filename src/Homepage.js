import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-wrap p-6">
      <div className="w-1/3 h-60 border flex items-center justify-center p-4">
        <div className="w-36 h-24 border flex flex-col items-center justify-center">
          <h1>Hats</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="w-1/3 h-60 border flex items-center justify-center ">
        <div className="w-36 h-24 border flex flex-col items-center justify-center">
          <h1>Jackets</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="w-1/3 h-60 border flex items-center justify-center ">
        <div className="w-36 h-24 border flex flex-col items-center justify-center">
          <h1>Sneakers</h1>
          <span>SHOP NOW</span>
        </div>
      </div>

      <div className="w-1/2 h-96 border flex items-center justify-center">
        <div className="w-36 h-24 border flex flex-col items-center justify-center">
          <h1>Womans</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
      <div className="w-1/2 h-96 border flex items-center justify-center ">
        <div className="w-36 h-24 border flex flex-col items-center justify-center">
          <h1>Mens</h1>
          <span>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

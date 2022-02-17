import React from "react";

const CheckoutItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="w-full flex items-center mb-10">
      <div className="w-36 h-52 mr-5">
        <img src={imageUrl} alt={name} className="w-full h-full" />
      </div>
      <span className="w-1/4">{name}</span>
      <span className="w-1/4">{quantity}</span>
      <span className="w-1/4">{price}</span>
      <div>&#10005;</div>
    </div>
  );
};

export default CheckoutItem;

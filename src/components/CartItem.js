import React from "react";

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => {
  return (
    <div className="flex items-center mb-5">
      <img src={imageUrl} alt={name} className="mr-5 w-24" />
      <div className="flex flex-col">
        <span>{name}</span>
        <span>
          {quantity}x $ {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

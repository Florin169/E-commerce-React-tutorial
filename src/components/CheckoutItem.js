import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, addItem, removeItem } from "../redux/cart/cartActions";

const CheckoutItem = ({ item }) => {
  const { name, price, imageUrl, quantity } = item;

  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center mb-10">
      <div className="w-36 h-52 mr-5">
        <img src={imageUrl} alt={name} className="w-full h-full" />
      </div>
      <span className="w-1/4">{name}</span>
      <span className="w-1/4 flex">
        <div
          className="mr-5 cursor-pointer"
          onClick={() => dispatch(removeItem(item))}
        >
          &#10094;
        </div>
        {quantity}
        <div
          className="ml-5 cursor-pointer"
          onClick={() => dispatch(addItem(item))}
        >
          &#10095;
        </div>
      </span>
      <span className="w-1/4">$ {price}</span>
      <div
        className="cursor-pointer"
        onClick={() => dispatch(removeFromCart(item))}
      >
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

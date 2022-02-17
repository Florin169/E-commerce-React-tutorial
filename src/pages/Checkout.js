import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  const items = useSelector((state) => state.dropDown.cartItems);

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="w-5/12 flex">
        <div className="w-1/4">
          <span>Product</span>
        </div>
        <div className="w-1/4">
          <span>Description</span>
        </div>
        <div className="w-1/4">
          <span>Quantity</span>
        </div>
        <div className="w-1/4">
          <span>Price</span>
        </div>
        <div className="w-1/12">
          <span>Remove</span>
        </div>
      </div>
      <div className="w-5/12 h-px bg-black my-5"></div>
      <div className="w-5/12">
        {items.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;

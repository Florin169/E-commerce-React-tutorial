import React from "react";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";

const CartDropdown = () => {
  const items = useSelector((state) => state.dropDown.cartItems);

  return (
    <div className="absolute w-72 h-96 flex flex-col justify-center items-center p-5 border border-black bg-white top-20 right-7 z-10">
      <div className="h-64 w-full flex flex-col overflow-auto">
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton className="mt-auto">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

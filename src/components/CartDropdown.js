import React from "react";
import CustomButton from "./CustomButton";

const CartDropdown = () => {
  return (
    <div className="absolute w-72 h-96 flex flex-col justify-center items-center p-5 border border-black bg-white top-20 right-7 z-10">
      <div className="h-60 flex flex-col overflow-auto"></div>
      <CustomButton className="mt-auto">GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;

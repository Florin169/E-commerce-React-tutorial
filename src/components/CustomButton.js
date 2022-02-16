import React from "react";

const CustomButton = ({ children, isGoogoleSignIn, ...otherProps }) => {
  return (
    <button
      {...otherProps}
      className={`${
        isGoogoleSignIn ? "bg-blue-600 hover:bg-blue-700 hover:text-white" : ""
      } w-40 min-w-fit h-12 px-9 text-base font-bold border-none cursor-pointer mt-10 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black mr-5`}
    >
      {children}
    </button>
  );
};

export default CustomButton;

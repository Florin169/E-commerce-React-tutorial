import React from "react";

const CustomButton = ({
  children,
  isGoogoleSignIn,
  addCart,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`${addCart ? "absolute bottom-10 w-4/5 left-11 " : "w-40"} ${
        isGoogoleSignIn ? "bg-blue-600 hover:bg-blue-700 hover:text-white" : ""
      }  min-w-fit h-12 px-9 text-base font-bold border-none cursor-pointer mt-10 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black mr-5`}
    >
      {children}
    </button>
  );
};

export default CustomButton;

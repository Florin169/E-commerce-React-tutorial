import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="flex items-center border-b border-teal-500 py-2 w-1/2">
      <input
        onChange={handleChange}
        {...otherProps}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none h-14 "
      />
    </div>
  );
};

export default FormInput;

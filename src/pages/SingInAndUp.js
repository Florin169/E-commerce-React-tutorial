import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

const SingInAndUp = () => {
  return (
    <div className="px-10 flex w-full">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInAndUp;

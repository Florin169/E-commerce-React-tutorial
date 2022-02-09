import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";

const Header = () => {
  return (
    <div className="px-10 flex items-center justify-between h-20 w-full mb-6">
      <Link to="/">
        <Logo />
      </Link>
      <div>
        <Link to="/shop" className="mr-5">
          SHOP
        </Link>
        <Link to="/shop">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";

import { auth } from "../firebase/firebase";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";

const Header = ({ currentUser }) => {
  const dropdown = useSelector((state) => state.dropDown.hidden);

  return (
    <div className="px-10 flex items-center justify-between h-20 w-full mb-6">
      <Link to="/">
        <Logo />
      </Link>
      <div className="w-1/3 flex justify-end items-center">
        <Link to="/shop" className="mr-5">
          SHOP
        </Link>
        <Link to="/shop" className="mr-5">
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()}>SIGN OUT</div>
        ) : (
          <Link to="signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {dropdown ? "" : <CartDropdown />}
    </div>
  );
};

export default Header;

import React from "react";
import { ReactComponent as Bag } from "../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.dropDown.cartItems);

  return (
    <div
      className="w-8 ml-5 relative cursor-pointer"
      onClick={() => dispatch(toggleCartHidden())}
    >
      <Bag />
      <span className="absolute top-2 left-3 ">0</span>
    </div>
  );
};

export default CartIcon;

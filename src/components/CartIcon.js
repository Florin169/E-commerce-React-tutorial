import React from "react";
import { ReactComponent as Bag } from "../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import { toggleCartHidden } from "../redux/cart/cartActions";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.dropDown.cartItems);

  const totalItems = items.reduce(
    (accumulate, item) => accumulate + item.quantity,
    0
  );

  return (
    <div
      className="w-8 ml-5 relative cursor-pointer"
      onClick={() => dispatch(toggleCartHidden())}
    >
      <Bag />
      <span className="absolute top-2 left-3 ">{totalItems}</span>
    </div>
  );
};

export default CartIcon;

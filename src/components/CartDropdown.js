import React from "react";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../redux/cart/cartActions";

const CartDropdown = () => {
  const items = useSelector((state) => state.dropDown.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="absolute w-72 h-96 flex flex-col justify-center items-center p-5 border border-black bg-white top-20 right-7 z-10">
      <div className="h-64 w-full flex flex-col overflow-auto">
        {items.length ? (
          items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="text-center mt-20 font-bold text-xl">
            Cart is empty
          </span>
        )}
      </div>
      <Link to="/checkout">
        <CustomButton
          className="mt-auto"
          onClick={() => dispatch(toggleCartHidden())}
        >
          GO TO CHECKOUT
        </CustomButton>
      </Link>
    </div>
  );
};

export default CartDropdown;

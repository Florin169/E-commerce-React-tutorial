import React from "react";
import CustomButton from "./CustomButton";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cart/cartActions";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;

  const dispatch = useDispatch();

  return (
    <div className="w-full h-128 p-2 relative hover:opacity-80">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="w-full h-full bg-no-repeat bg-center bg-cover"
      />
      <div className="flex items-center justify-between">
        <span>{name}</span>
        <span>$ {price}</span>
      </div>
      <CustomButton addCart onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;

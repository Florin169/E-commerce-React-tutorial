import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import directoryReducer from "./directory/directoryReducer";
import { shopReducer } from "./shop/shopReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  user: userReducer,
  dropDown: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

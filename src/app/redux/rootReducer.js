import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  search: searchReducer,
});

export default rootReducer;

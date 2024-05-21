import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import categoryReducer from "./slices/categoriesSlice";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  search: searchReducer,
  category: categoryReducer,
});

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

export default rootReducer;

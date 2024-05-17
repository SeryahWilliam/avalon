import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "../slices/productSlice";
import products from "@/app/productList";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { dispatch }) => {
    try {
      dispatch(setProducts(products));
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

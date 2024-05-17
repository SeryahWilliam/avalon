import { createAsyncThunk } from "@reduxjs/toolkit";
import { setProducts } from "../slices/productSlice";
import products from "@/app/productList";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (page = 1, { dispatch }) => {
    try {
      const start = (page - 1) * 25;
      const end = page * 25;
      const paginatedProducts = products.slice(start, end);

      dispatch(
        setProducts({
          products: paginatedProducts,
          page,
          totalProducts: products.length,
        })
      );
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);

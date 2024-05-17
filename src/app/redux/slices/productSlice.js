import { createSlice } from "@reduxjs/toolkit";
import products from "@/app/productList";

const initialState = {
  products: [],
  currentProduct: null,
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    createProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
});

export const {
  getProducts,
  getProduct,
  setProducts,
  setCurrentProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  clearCurrentProduct,
} = productSlice.actions;

export default productSlice.reducer;

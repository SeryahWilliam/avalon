import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (userId) => {
  const response = await axios.get(`/api/cart/${userId}`);
  return response.data;
});

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cart }) => {
    await axios.post(`/api/cart/${userId}`, { items: cart.items });
  }
);

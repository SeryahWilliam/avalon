import { createAsyncThunk } from "@reduxjs/toolkit";
import { setCategories } from "../slices/categoriesSlice";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { dispatch }) => {
    try {
      const response = await axios.get("/api/categories");
      dispatch(setCategories(response.data));
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  }
);

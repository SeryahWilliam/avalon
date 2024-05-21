import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setUser } from "../slices/userSlice";

// Fetch User
export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userId, { dispatch }) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      dispatch(setUser(response.data));
      console.log("here");
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  }
);

// Update User
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async ({ userId, userData }) => {
    const response = await axios.put(`/api/users/${userId}`, userData);
    return response.data;
  }
);

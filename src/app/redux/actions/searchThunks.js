import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (searchTerm) => {
    const response = await axios.get(`/api/items?search=${searchTerm}`);
    return response.data;
  }
);

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCart, saveCart } from "../actions/cartThunks";

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.item._id === action.payload.item._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total +=
        parseFloat(action.payload.item.price) * action.payload.quantity;
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.item._id === action.payload.item._id
      );
      if (item) {
        const quantityDifference = action.payload.quantity - item.quantity;
        item.quantity = action.payload.quantity;
        state.total += parseFloat(item.item.price) * quantityDifference;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.item._id === action.payload
      );
      if (itemIndex >= 0) {
        state.total -=
          parseFloat(state.items[itemIndex].item.price) *
          state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.items.reduce(
          (total, item) => total + parseFloat(item.item.price) * item.quantity,
          0
        );
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(saveCart.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(saveCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addItem, updateItemQuantity, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

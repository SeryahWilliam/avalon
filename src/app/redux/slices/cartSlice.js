import { createSlice } from "@reduxjs/toolkit";

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
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.total += parseFloat(action.payload.price) * action.payload.quantity;
    },
    updateItemQuantity: (state, action) => {
      const item = state.items.find((item) => item._id === action.payload._id);
      if (item) {
        const quantityDifference = action.payload.quantity - item.quantity;
        item.quantity = action.payload.quantity;
        state.total += parseFloat(item.price) * quantityDifference;
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (itemIndex >= 0) {
        state.total -=
          parseFloat(state.items[itemIndex].price) *
          state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addItem,
  updateItemQuantity,
  removeItem,
  clearCart,
  setLoading,
  setError,
} = cartSlice.actions;
export default cartSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/orders";

const initialState = {
  orders: [],
  amount: 4,
  total: 0,
  isLoading: true,
};

export const getOrders = createAsyncThunk(
  "order/getOrders",
  async (name, thunkAPI) => {
    try {
      console.log("try");
      console.log(name);
      console.log(thunkAPI);
      console.log(thunkAPI.getState());
      //thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      console.log("resp");
      console.log(resp);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.orders = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrders.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getOrders.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

console.log(orderSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  orderSlice.actions;

export default orderSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { shopSlice } from "./shopSlice";
import { authSlice } from "./authSlice";

export const store = configureStore({
  reducer: {
    shop: shopSlice.reducer,
    auth: authSlice.reducer
  }
})
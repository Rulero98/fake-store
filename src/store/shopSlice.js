import { createSlice } from '@reduxjs/toolkit';
export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state, action) => {
      state.counter += 1;
    },
  }
});
export const { increment } = shopSlice.actions;
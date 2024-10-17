import { createSlice } from '@reduxjs/toolkit';
export const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    dataShop: {}
  },
  reducers: {

    setDataShop: (state, action) => {
      state.dataShop = action.payload
    },
  }
});
export const { setDataShop } = shopSlice.actions;
import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {

    status: 'checking',
    uid: null,
    name: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,

  },
  reducers: {
    addNewUser: (state, { payload }) => {
      state.uid = payload.uid;
      state.name = payload.name;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
    },
  }
});
export const { addNewUser } = authSlice.actions;
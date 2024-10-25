import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {

    status: 'no-authenticated', //checkking, authenticated, no-authenticated
    uid: null,
    name: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,

  },
  reducers: {
    checkingStatus: (state) => {
      state.status = 'checking'
    },
    login: (state, { payload }) => {
      state.status = 'authenticated'
      state.uid = payload.uid;
      state.name = payload.name;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL;
    },
  }
});
export const {
  login,
  checkingStatus
} = authSlice.actions;
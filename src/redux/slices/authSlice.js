// src/redux/slices/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle", // Can be 'loading', 'succeeded', 'failed'
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.status = "succeeded";
    },
    logout: (state) => {
      state.user = null;
      state.status = "idle";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

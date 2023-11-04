// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateProfile: (state, action) => {
      // Update user profile details
      state.user = { ...state.user, ...action.payload };
    },
    // Add other authentication-related actions (logout) as needed
  },
});

export const { signup, login, logout, updateProfile } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;

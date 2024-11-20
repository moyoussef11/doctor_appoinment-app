import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register, resetAuth } from "./auth";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: localStorage.getItem("token") || null,
  loggedUser: localStorage.getItem("loggedUser") || false,
  loading: "idle" | "pending" | "succeeded" | "failed",
  created: false,
  error: null,
  loggedOut: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.error = null;
        state.loading = "pending";
        state.token = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
        state.created = false;
        state.token = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.error = null;
        state.created = true;
        state.token = null;
        state.loading = "succeeded";
      })
      .addCase(resetAuth, () => initialState)
      .addCase(login.pending, (state) => {
        state.error = null;
        state.loading = "pending";
        state.token = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
        state.created = false;
        state.token = null;
        state.user = null;
        state.loggedUser = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.error = null;
        state.loading = "succeeded";
        state.loggedUser = true;
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      })
      .addCase(logout, (state) => {
        state.error = null;
        state.created = false;
        state.loading = "idle";
        state.user = {};
        state.token = null;
        state.loggedUser = false;
        state.loggedOut = true;
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("loggedUser");
      });
  },
});

export default authSlice.reducer;

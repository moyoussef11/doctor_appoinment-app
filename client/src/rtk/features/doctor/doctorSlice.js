import { createSlice } from "@reduxjs/toolkit";
import { addDoctor, getDoctor, getDoctors, resetState } from "./doctor";

const initialState = {
  doctors: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  updated: false,
  error: null,
  doctor: {},
  added: false,
};

export const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDoctors.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(getDoctors.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
      })
      .addCase(getDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload;
        state.loading = "succeeded";
      })
      .addCase(getDoctor.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(getDoctor.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
      })
      .addCase(getDoctor.fulfilled, (state, action) => {
        state.doctor = action.payload;
        state.loading = "succeeded";
      })
      .addCase(addDoctor.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(addDoctor.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
      })
      .addCase(addDoctor.fulfilled, (state, action) => {
        state.doctor = action.payload;
        state.loading = "succeeded";
        state.added = true;
      })
      .addCase(resetState, () => initialState);
  },
});

export default doctorSlice.reducer;

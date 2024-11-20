import { createSlice } from "@reduxjs/toolkit";
import {
  bookingAppointment,
  cancelMyAppointment,
  fetchUser,
  fetchUsers,
  getAppointments,
  getMyAppointments,
  updateUser,
} from "./user";

const initialState = {
  users: [],
  loading: "idle" | "pending" | "succeeded" | "failed",
  updated: false,
  error: null,
  user: {},
  booking: false,
  appointments: [],
  canceled: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = "pending";
        state.error = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = "failed";
        if (action.payload.response.data.msg) {
          state.error = action.payload.response.data.msg;
        } else {
          state.error = action.error;
        }
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.error = false;
        state.loading = "succeeded";
        state.users = action.payload.data.users;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = "pending";
        state.error = false;
        state.updated = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
        state.updated = true;
      })
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = "succeeded";
        state.updated = true;
      })
      .addCase(bookingAppointment.pending, (state) => {
        state.loading = "pending";
        state.booking = false;
      })
      .addCase(bookingAppointment.rejected, (state, action) => {
        state.loading = "failed";
        state.booking = false;
        state.error = action.payload;
      })
      .addCase(bookingAppointment.fulfilled, (state) => {
        state.loading = "succeeded";
        state.booking = true;
      })
      .addCase(getMyAppointments.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMyAppointments.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      })
      .addCase(getMyAppointments.fulfilled, (state, action) => {
        state.loading = "succeeded";
        if (action?.payload?.data?.appointments?.length === 0) {
          state.appointments = "your appointments is Empty go to book ";
        } else {
          state.appointments = action.payload;
        }
      })
      .addCase(cancelMyAppointment.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(cancelMyAppointment.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      })
      .addCase(cancelMyAppointment.fulfilled, (state) => {
        state.loading = "succeeded";
        state.canceled = true;
      })
      .addCase(getAppointments.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getAppointments.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload;
      })
      .addCase(getAppointments.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.appointments = action.payload;
      });
  },
});

export default userSlice.reducer;

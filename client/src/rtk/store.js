import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import userSlice from "./features/user/userSlice";
import doctorSlice from "./features/doctor/doctorSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    doctors: doctorSlice,
  },
});

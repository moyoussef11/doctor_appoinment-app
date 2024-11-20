import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  APPOINTMENTS,
  BASEURL,
  BOOK_APPOINTMENT,
  MY_APPOINTMENTS,
  USERS,
} from "../../../Api/api";

const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(`${BASEURL}/${USERS}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const fetchUser = createAsyncThunk("users/fetchUser", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${BASEURL}/${USERS}/${id}`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ data, id }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASEURL}/${USERS}/${id}`, data, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const getAppointments = createAsyncThunk(
  "users/getAppointments",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASEURL}/${USERS}/${APPOINTMENTS}`,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getMyAppointments = createAsyncThunk(
  "users/getMyAppointments",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASEURL}/${USERS}/${id}/${MY_APPOINTMENTS}`,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const bookingAppointment = createAsyncThunk(
  "users/bookingAppointment",
  async ({ id, slotDate, slotTime }, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASEURL}/${USERS}/${BOOK_APPOINTMENT}`,
        { docId: id, slotTime, slotDate },
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cancelMyAppointment = createAsyncThunk(
  "users/cancelMyAppointment",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASEURL}/${USERS}/${APPOINTMENTS}/${id}`,
        {
          headers: { Authorization: "Bearer " + localStorage.getItem("token") },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export {
  fetchUsers,
  fetchUser,
  updateUser,
  bookingAppointment,
  getMyAppointments,
  cancelMyAppointment,
  getAppointments,
};

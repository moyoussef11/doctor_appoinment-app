import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASEURL, DOCTORS } from "../../../Api/api";

const getDoctors = createAsyncThunk(
  "doctors/getDoctors",
  async (__, thunkAPI) => {
    try {
      const response = await axios.get(`${BASEURL}/${DOCTORS}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const getDoctor = createAsyncThunk(
  "doctors/getDoctor",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${BASEURL}/${DOCTORS}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const addDoctor = createAsyncThunk(
  "doctors/addDoctor",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(`${BASEURL}/${DOCTORS}`, formData, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const resetState = createAction("RESET_ALL");

export { getDoctors, getDoctor, addDoctor, resetState };

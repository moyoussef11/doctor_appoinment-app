import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH, BASEURL, LOGIN, REGISTER } from "../../../Api/api";

const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post(
        `${BASEURL}/${AUTH}/${REGISTER}`,
        formData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.msg);
    }
  }
);

const resetAuth = createAction("RESET_AUTH");

const login = createAsyncThunk("auth/login", async (formData, thunkAPI) => {
  try {
    const response = await axios.post(`${BASEURL}/${AUTH}/${LOGIN}`, formData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.data.user));
      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("loggedUser", true);
    }
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.msg);
  }
});

const logout = createAction("logout");

export { register, resetAuth, login, logout };

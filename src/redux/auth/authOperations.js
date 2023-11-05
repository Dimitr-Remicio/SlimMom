import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

// raiz
// const base = "https://slimmomapi-dev-xdce.2.us-1.fl0.io/api";
// dairodev
const base = "https://slimmomsapi-dev-bbqt.3.us-1.fl0.io/api";


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};
const headers = {
  "Content-type": "application/json",
};
const register = createAsyncThunk(
  "/auth/signup",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post(`${base}/users/signup`, credential);
      Notiflix.Notify.success("Registration was successful!", {
        timeout: 6000,
      });

      return data;
    } catch (error) {
      Notiflix.Notify.error(
        "We could not complete your registration successfully!!",
        {
          timeout: 6000,
        }
      );
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const logIn = createAsyncThunk("/auth/login", async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post(`${base}/users/login`, credential);
    Notiflix.Notify.success("wellcome back, you logged successfully", {
      timeout: 6000,
    });
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.error("Sorry, verify your email or password!!", {
      timeout: 6000,
    });
    return thunkAPI.rejectWithValue(error);
  }
});

const logOut = createAsyncThunk("/auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get(`${base}/users/logout`);
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const updateAvatar = createAsyncThunk(
  "/auth/update",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.patch("/users/avatars", credential, {
        headers: headers,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const refreshUser = createAsyncThunk("auth/current", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const authOperations = {
  register,
  logIn,
  logOut,
  updateAvatar,
  refreshUser,
};

export default authOperations;

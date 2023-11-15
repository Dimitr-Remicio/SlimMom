import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const base = "https://slimmomapi-dev-qjnz.4.us-1.fl0.io/api";
// const base = "http://localhost:3000/api";



const calc = createAsyncThunk('/calculator', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post(`${base}/calculator`, credential);
    return {usData: data, usInfo:credential };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const calcUserUpdate = createAsyncThunk(
  '/calc/user',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.patch(`${base}/users/calculator`, credential);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const calcOperation = {
  calc,
  calcUserUpdate,
};
export default calcOperation;

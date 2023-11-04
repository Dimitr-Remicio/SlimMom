import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

const base = "http://localhost:3000/api";
const calc = createAsyncThunk('/calc', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post(`${base}/calculator`, credential);
    console.log(data);
    return {usData: data,usInfo:credential };
    
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const calcUserUpdate = createAsyncThunk(
  '/calc/user',
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.put('/calc/user', credential);
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

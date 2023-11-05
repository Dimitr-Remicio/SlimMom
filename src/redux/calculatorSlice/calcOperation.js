import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// raiz
// const base = "https://slimmomapi-dev-xdce.2.us-1.fl0.io/api";
// dairodev
const base = "https://slimmomsapi-dev-bbqt.3.us-1.fl0.io/api";



const calc = createAsyncThunk('/calculator', async (credential, thunkAPI) => {
  try {
    const { data } = await axios.post(`${base}/calculator`, credential);
    console.log(data);
    console.log(credential);
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
      console.log(data);
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

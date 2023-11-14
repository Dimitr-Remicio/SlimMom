import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


// raiz
// const base = "https://slimmom-7ckv.onrender.com/api";
// const base = "https://slimmomapi-dev-xdce.2.us-1.fl0.io/api";
// dairodev -actualizada
// const base = "https://slimmomsapi-dev-bbqt.3.us-1.fl0.io/api";

//nuervo servidor
const base ="https://slimmomapi-dev-zdmt.2.us-1.fl0.io/api"
// localhost
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

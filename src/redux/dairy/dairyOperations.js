import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllProduct,
  searchProduct,
  getDairy,
  addProductForUser,
  deleteProductRequest,
} from "../services/api-reguest";

const fetchAll = createAsyncThunk(
  "fetchAll",
  async function (data) {
    try {
      const user = await getAllProduct(data);
      console.log(user.data);
      return user;
    } catch (error) {
      console.error(error.message);
    }
  }
);

const fetchDairy = createAsyncThunk(
  "product/dairy",
  async function (data, { rejectWithValue }) {
    try {
      const user = await getDairy(data);
      return user;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async function (search, { rejectWithValue }) {
    try {
      const products = await searchProduct(search);
      return products;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const addProduct = createAsyncThunk(
  "product/add",
  async function (newObject, { rejectWithValue }) {
    try {
      const products = await addProductForUser(newObject);
      console.log(products)
      return products;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const removeProduct = createAsyncThunk(
  "product/delete",
  async function ({ dataFormat, id }, { rejectWithValue }) {
    try {
      const result = await deleteProductRequest({ dataFormat, id });
      return result;
    } catch (error) {
      console.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

export { fetchAll, fetchProducts, fetchDairy, addProduct, removeProduct };

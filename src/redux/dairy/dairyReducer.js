import { createSlice } from '@reduxjs/toolkit';

import {
  fetchAll,
  // fetchProducts,
  fetchDairy,
  addProduct,
  removeProduct,
} from './dairyOperations';

const initialState = {
  date: '',
  products: [],
  summary: {
    dailyRate: null,
    consumed: null,
    left: null,
    nOfNorm: null,
  },
  notRecFood: [],
  dateFind: '',
  toggle: false,
  error: null,
  productList: [],
  productsAll: [],
};



const summaryForDaySlice = createSlice({
  name: 'daySummary',
  initialState,
  reducers: {
    addDate(state, action) {
      state.dateFind = action.payload;
    },
    changeToggle(state, action) {
      state.toggle = action.payload;
    },
  },
  extraReducers: {
    [fetchDairy.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.date = payload.result.date;
      state.summary.dailyRate = payload.result.summary.dailyRate;
      state.summary.consumed = payload.result.summary.consumed;
      state.summary.left = payload.result.summary.left;
      state.summary.nOfNorm = payload.result.summary.nOfNorm;
      state.notRecFood = payload.notRecFood;
      state.error = null
    },
    [fetchAll.fulfilled]: (state,action) => {
      state.data = action.payload;
      state.error = null
    },

    // [fetchProducts.fulfilled]: (state, { payload }) => {
    //   state.productList = payload;
    //   state.error = null
    // },

    [addProduct.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.summary.dailyRate = payload.result.summary.dailyRate;
      state.summary.consumed = payload.result.summary.consumed;
      state.summary.left = payload.result.summary.left;
      state.summary.nOfNorm = payload.result.summary.nOfNorm;
      state.error = null
    },
    [removeProduct.fulfilled]: (state, { payload }) => {
      state.products = payload.result.products;
      state.summary.dailyRate = payload.result.summary.dailyRate;
      state.summary.consumed = payload.result.summary.consumed;
      state.summary.left = payload.result.summary.left;
      state.summary.nOfNorm = payload.result.summary.nOfNorm;
      state.error = null
    },
    // [fetchProducts.rejected]: (state, { payload }) => {
    //   state.error = payload;
    // },
    [fetchAll.rejected]: (state, { payload }) => {
      state.error = payload;
    },

    [fetchAll.pending]: (state, ) => {
      state.error = null;
    },
    // [fetchProducts.pending]: (state, ) => {
    //   state.error = null;
    // },
    [addProduct.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [addProduct.pending]: (state, ) => {
      state.error = null;
    },
    [fetchDairy.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [fetchDairy.pending]: (state, ) => {
      state.error = null;
    },
    [removeProduct.rejected]: (state, { payload }) => {
      state.error = payload;
    },
    [removeProduct.pending]: (state, ) => {
      state.error = null;
    },
  },
});


export const { addDate, changeToggle } = summaryForDaySlice.actions;
export default summaryForDaySlice.reducer;


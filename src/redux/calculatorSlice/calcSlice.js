import { createSlice } from '@reduxjs/toolkit';
import calcOperation from './calcOperation';

const calcSlice = createSlice({
  name: 'calculator',
  initialState: {
    userData: { dailyRate: '000', notHealthy: [] },
    userInfo: {
      height: null,
      age: null,
      weightCurrent: null,
      weightDesired: null,
      bloodType: '1',
    },
    loaderShow: false,
  },
  extraReducers: {
    [calcOperation.calc.fulfilled](state, action) {
      state.userData = action.payload.usData;
      state.userInfo = action.payload.usInfo;
      state.loaderShow = false;
    },
    [calcOperation.calc.pending](state) {
      state.loaderShow = true;
    },
    [calcOperation.calc.rejected](state) {
      state.loaderShow = false;
    },

    [calcOperation.calcUserUpdate.fulfilled](state, action) {
      state.userData = action.payload;
      state.loaderShow = false;
    },
    [calcOperation.calcUserUpdate.pending](state) {
      state.loaderShow = true;
    },
    [calcOperation.calcUserUpdate.rejected](state) {
      state.loaderShow = false;
    },
  },

  reducers: {
    updateUser: (state, action) => {
      state.userInfo.height = action.payload.height;
      state.userInfo.age = action.payload.age;
      state.userInfo.weightDesired = action.payload.weightDesired;
      state.userInfo.bloodType = action.payload.bloodType;
      state.userInfo.weightCurrent = action.payload.weightCurrent;
    },
    wipeUser: (state) => {
      state.userInfo.height = null;
      state.userInfo.age = null;
      state.userInfo.weightDesired = null;
      state.userInfo.bloodType = '1';
      state.userInfo.weightCurrent = null;
      state.userData.dailyRate = '000';
      state.userData.notHealthy = [];
    },
  },
});

export default calcSlice.reducer;

export const { updateUser, wipeUser } = calcSlice.actions;

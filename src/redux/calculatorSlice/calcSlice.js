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
      blood: '1',
    },
    loaderShow: false,
    isModalOpen: false,
  },
  extraReducers: {
    [calcOperation.calc.fulfilled](state, action) {
      state.userData = action.payload.usData;
      state.userInfo = action.payload.usInfo;
      state.isModalOpen = true;
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
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    updateUser: (state, action) => {
      state.userInfo.height = action.payload.height;
      state.userInfo.age = action.payload.age;
      state.userInfo.weightDesired = action.payload.weightDesired;
      state.userInfo.blood = action.payload.blood;
      state.userInfo.weightCurrent = action.payload.weightCurrent;
    },
    wipeUser: (state) => {
      state.userInfo.height = null;
      state.userInfo.age = null;
      state.userInfo.weightDesired = null;
      state.userInfo.blood = '1';
      state.userInfo.weightCurrent = null;
      state.userData.dailyRate = '000';
      state.userData.notHealthy = [];
    },
  },
});

export default calcSlice.reducer;

export const { updateUser, wipeUser, setIsModalOpen } = calcSlice.actions;

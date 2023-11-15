import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    height: null,
    age: null,
    weightCurrent: null,
    weightDesired: null,
    blood: null,
    createdAt: '',
  },
  token: null,
  isLoggedIn: false,
  isCurrentUserRefresh: false,
  loaderShow: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = false;
      state.loaderShow = false;
    },
    [authOperations.register.pending](state) {
      state.loaderShow = true;
    },
    [authOperations.register.rejected](state) {
      state.loaderShow = false;
    },

    [authOperations.logIn.fulfilled](state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
      state.loaderShow = false;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem('isLoggedIn', 'true');
    },
    [authOperations.logIn.pending](state) {
      state.loaderShow = true;
    },
    [authOperations.logIn.rejected](state) {
      state.loaderShow = false;
    },

    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: '',
        email: '',
        height: 0,
        age: 0,
        weightCurrent: 0,
        weightDesired: 0,
        blood: 0,
      };

      // localStorage.removeItem("user");
      // localStorage.removeItem("token");
      // localStorage.removeItem("isLoggedIn");

      // // state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      state.loaderShow = false;
      state.isCurrentUserRefresh = false;
      localStorage.clear();

    },

    [authOperations.logOut.pending](state) {
      state.loaderShow = true;
    },
    [authOperations.logOut.rejected](state) {
      state.loaderShow = false;
    },

    [authOperations.updateAvatar.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [authOperations.refreshUser.pending](state) {
      state.isCurrentUserRefresh = true;
      state.loaderShow = true;
    },

    [authOperations.refreshUser.fulfilled](state, action) {
      state.isCurrentUserRefresh = false;
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loaderShow = false;
    },

    [authOperations.refreshUser.rejected](state) {
      state.isCurrentUserRefresh = false;
      state.loaderShow = false;
    },
  },
});

export default authSlice.reducer;

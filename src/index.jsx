import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './redux/store.js';
import authOperations from './redux/auth/authOperations.js';
// import Menu from './components/HeaderMobile/HeaderMobile.jsx';


const storedUser = localStorage.getItem('user');
const storedToken = localStorage.getItem('token');
const storedIsLoggedIn = localStorage.getItem('isLoggedIn');


if (storedUser && storedToken && storedIsLoggedIn === 'true'){
  store.dispatch(authOperations.logIn.fulfilled({
    user: JSON.parse(storedUser),
    token: storedToken,
  }));
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="SlimMom/">
          {/* <Menu/> */}
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

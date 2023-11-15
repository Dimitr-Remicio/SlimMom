// import React, { useContext, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";

// import { BrowserRouter } from "react-router-dom";
// import { Provider, useSelector } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor, store } from "./redux/store.js";
// import authOperations from "./redux/auth/authOperations.js";
// import authSelector from "./redux/auth/selectors.js";
// // import Menu from './components/HeaderMobile/HeaderMobile.jsx';

// // function User() {
// //   // Rule 2: call hooks in function component
// //   return <>{(storedIsLoggedIn, storedUser, storedToken)}</>;
// // }

// const IndexRender = () => {

//   const root = ReactDOM.createRoot(document.getElementById("root"));

//   // const StoredIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
//   // const StoredUser = useSelector(authSelector.getFullUser);
//   // const StoredToken = useSelector(authSelector.getToken);
//   const StoredUser = localStorage.getItem("user");
//   const StoredToken = localStorage.getItem("token");
//   const StoredIsLoggedIn = localStorage.getItem("isLoggedIn");
//   // useEffect(() => {
//   //   console.log(StoredUser);
//   //   console.log(StoredToken);
//   //   console.log(StoredIsLoggedIn);
//   // }, [StoredIsLoggedIn, StoredToken, StoredUser]);

//   if (StoredUser && StoredToken && StoredIsLoggedIn === "true") {
//     store.dispatch(
//       authOperations.logIn.fulfilled({
//         user: JSON.parse(StoredUser),
//         token: JSON.parse(StoredToken),
//       })
//     );
//   }

//   root.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <BrowserRouter basename="SlimMom/">
//             {/* <Menu/> */}
//             <App />
//           </BrowserRouter>
//         </PersistGate>
//       </Provider>
//     </React.StrictMode>
//   );
// };

// IndexRender();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './redux/store.js';
import authOperations from './redux/auth/authOperations.js';
import authSelector from './redux/auth/selectors.js';
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

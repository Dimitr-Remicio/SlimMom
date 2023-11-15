import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Calculator from "../pages/Calculator";
import Diary from "../pages/DiaryPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import authSelector from "../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../redux/auth/authOperations";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const Layout = lazy(() => import("../components/Layout/Layout"));
const MainPage = lazy(() => import("../pages/Home"));
const LoginPage = lazy(() => import("../pages/Login"));
const RegistrationPage = lazy(() => import("../pages/Signup"));
const DiaryPage = lazy(() => import("../pages/DiaryPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Routers = () => {
  const location = useLocation();

  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const dispatch = useDispatch();
  const isRefreshUser = useSelector(authSelector.getIsRefresh);

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);
  return (
    !isRefreshUser && (
      <>
        {/* {userIsLoggedIn ? (
        <Routes>
          <Route path="/SlimMom/calculator" element={<Calculator />} />
          <Route path="/SlimMom/diary" element={<Diary />} />
        </Routes>
      ) : ( */}
        {/* <Routes>
          <Route path="SlimMom/" element={<Navigate to="home" />} />
          <Route path="/SlimMom/home" element={<Home />} />
          <Route path="/SlimMom/login" element={<Login />} />
          <Route path="/SlimMom/signup" element={<Signup />} />
        </Routes> */}
        {/* )} */}

        <Routes>
          <Route path="*" element={isLoggedIn ? <Calculator /> : <Home />} />
          {isLoggedIn ? (
            <Route path="SlimMom" element={<Calculator />} />
          ) : (
            <Route path="SlimMom" element={<Home />} />
          )}
          <Route
            path="/home"
            element={
              isLoggedIn ? (
                <Calculator />
              ) : (
                <Home />
                // {/* <Calculator /> */}
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/calculator"
            element={
              isLoggedIn ? (
                <Calculator />
              ) : (
                <Navigate to="/home" />
                // {/* <Calculator /> */}
              )
            }
          />
          <Route
            path="/diary"
            element={
              isLoggedIn ? (
                <Diary />
              ) : (
                // <Diary />
                // :  <Diary />
                <Navigate to="/home" />
              )
            }
          />
        </Routes>
      </>
    )
  );

  // return (
  //   !isRefreshUser && (
  //     <>
  //       <Suspense fallback="">
  //         <AnimatePresence>
  //           <Routes
  //             location={location}
  //             key={location.pathname}>
  //             <Route
  //               exact
  //               path="/"
  //               element={
  //                <Layout />
  //                }
  //             >
  //               <Route
  //                 index
  //                 element={
  //                   <PublicRoute>
  //                     <Home />
  //                   </PublicRoute>
  //                 }
  //               />

  //               <Route
  //                 path="/signup"
  //                 element={
  //                   <PublicRoute restricted>
  //                     <RegistrationPage />
  //                   </PublicRoute>
  //                 }
  //               />

  //               <Route
  //                 path="/login"
  //                 element={
  //                   <PublicRoute redirectTo="/diary" restricted>
  //                     <LoginPage />
  //                   </PublicRoute>
  //                 }
  //               />

  //               <Route
  //                 path="/calculator"
  //                 element={
  //                   <ProtectedRoute>
  //                     <MainPage />
  //                   </ProtectedRoute>
  //                 }
  //               />

  //               <Route
  //                 path="/diary"
  //                 element={
  //                   <ProtectedRoute>
  //                     <DiaryPage />
  //                   </ProtectedRoute>
  //                 }
  //               />

  //               <Route path="*" element={<NotFound />} />
  //             </Route>

  //           </Routes>
  //         </AnimatePresence>
  //       </Suspense>
  //     </>
  //   )
  // );
};

// Asdfghjkl12345
// asdsds@gmail.com

export default Routers;

import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Calculator from "../pages/Calculator";
import Diary from "../pages/DiaryPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import authSelector from "../redux/auth/selectors";
import { useSelector } from "react-redux";

const Routers = () => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  useEffect(() => {
    const lastVisitedRoute = localStorage.getItem("lastVisitedRoute");
    if (lastVisitedRoute) {
      window.location.replace(lastVisitedRoute);
    }
  }, []);

  const handleRouteChange = (newPath) => {
    localStorage.setItem("lastVisitedRoute", newPath);
  };

  const LoginRedirect = () => {
    if (isLoggedIn) {
      handleRouteChange("/SlimMom/diary");
      return <Navigate to="/SlimMom/diary" replace />;
    }
    return <Login />;
  };

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="SlimMom" element={<Navigate to="home" />} />
      <Route path="/home" element={<Home />} onNavigate={(newPath) => handleRouteChange(newPath)} />
      <Route path="/login" element={<LoginRedirect />} />
      <Route path="/signup" element={<Signup />} onNavigate={(newPath) => handleRouteChange(newPath)} />
      <Route path="/calculator" element={isLoggedIn ? <Calculator /> : <Navigate to="/home" replace state={{ from: "/calculator" }} />} onNavigate={(newPath) => handleRouteChange(newPath)} />
      <Route path="/diary" element={isLoggedIn ? <Diary /> : <Navigate to="/home" replace state={{ from: "/diary" }} />} onNavigate={(newPath) => handleRouteChange(newPath)} />
    </Routes>
  );
};

export default Routers;
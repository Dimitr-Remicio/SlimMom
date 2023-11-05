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

  return (
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
        <Route path="SlimMom/" element={<Navigate to="home" />} />
        <Route path="/SlimMom/home" element={<Home />} />
        <Route path="/SlimMom/login" element={<Login />} />
        <Route path="/SlimMom/signup" element={<Signup />} />
        <Route
          path="/SlimMom/calculator"
          element={
            isLoggedIn ? <Calculator /> 
            : <Calculator /> 
            // : <Navigate to="/SlimMom/home" />
          }
        />
        <Route
          path="/SlimMom/diary"
          element={isLoggedIn ? <Diary /> 
          :  <Diary /> }
          // : <Navigate to="/SlimMom/home" />}
        />
      </Routes>
    </>
  );
};

// Asdfghjkl12345
// asdsds@gmail.com

export default Routers;

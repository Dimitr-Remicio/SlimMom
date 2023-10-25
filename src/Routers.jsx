import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Diary from '../pages/Diary';
import Login from '../pages/Login';
import Signup from '../pages/Signup';



const Routers = () => {
  return (
    <Routes>
      <Route path="SlimMom/" element={<Navigate to='home' />} />
      <Route path='/SlimMom/home' element={<Home/>}/>
      <Route path='/SlimMom/calculator' element={<Calculator/>}/>
      <Route path='/SlimMom/diary' element={<Diary/>}/>
      <Route path='/SlimMom/login' element={<Login/>}/>
      <Route path='/SlimMom/signup' element={<Signup/>}/>
  </Routes>
) 
}

export default Routers
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import Button from "@mui/material/Button";
// import { getAllProducts } from "../redux/dairy/dairySelector";
// import BackAnimated from "../components/BackAnimated/BackAnimated";
import authSelector from '../redux/auth/selectors';
import "../styles/Home.css";

import Diary from './DiaryPage';

import FormHome from "../components/Forms/FormHome/FormHome";
import calcOperation from '../redux/calculatorSlice/calcOperation';
const Home = () => {

  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
  // const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state)
  const findProducts = () => {
    dispatch(calcOperation.calc())
  };




  return (
    <section>
      {/* <BackAnimated />   */}

      {userIsLoggedIn ? <Diary/> : (<div className="Home">
        <h1>Calculate your daily calorie intake right now</h1>
        <FormHome />
        <div style={{ translate: "-25px" }}>
          <Button
            style={{
              backgroundColor: "#FC842D",
              padding: "15px 20px",
              width: "18rem",
              borderRadius: "20em",
              fontFamily: "Verdana bold",
              textTransform: "none",
            }}
            variant="contained"
            
            onClick={findProducts}
          >
            Start losing weight
          </Button>

          {/* <button onClick={findProducts}>show in console prod</button> */}
          {/* {
            fetchAll.map((e) => (<li key={id}>{e}</li>))
          } */}


        </div>
      </div>)}
    </section>
  );
};

export default Home;

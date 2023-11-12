import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../redux/dairy/dairySelector";
// import BackAnimated from "../components/BackAnimated/BackAnimated";
import authSelector from "../redux/auth/selectors";

import "../styles/Home.css";

import Diary from "./DiaryPage";

import FormHome from "../components/Forms/FormHome/FormHome";
import { fetchProducts } from "../redux/dairy/dairyOperations";
import Button from "@mui/material/Button";
import Modal from "../components/Modal/Modal";
import calcSelectors from "../redux/calculatorSlice/calculatorSelectors";
import Calculator from "./Calculator";

const Home = () => {
  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const IsOpenModal = useSelector(calcSelectors.getIsModalOpen);



  const dispatch = useDispatch();

  return (
    <>
      <section>
        {/* <button onClick={findProduct}>show in console prod</button> */}
        {/* {
            fetchAll.map((e) => (<li key={id}>{e}</li>))
          } */}

        {userIsLoggedIn ? (
          <Calculator />
        ) : (
          <div className="Home">
            <FormHome title="Calculate your daily calorie intake right now" />
          </div>
        )}
      </section>
      <Modal isOpen={IsOpenModal}/>
    </>
  );
};

export default Home;

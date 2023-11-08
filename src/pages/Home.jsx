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

const Home = () => {
  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
  // const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const findProduct = (value) => {
    dispatch(fetchProducts(value));
  };
  // const state = useSelector((state) => state)
  const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar la apertura y cierre del modal

  function handleOpenModal() {
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
  }

  return (
    <>
      <section>
        {/* <button onClick={findProduct}>show in console prod</button> */}
        {/* {
            fetchAll.map((e) => (<li key={id}>{e}</li>))
          } */}

        {userIsLoggedIn ? (
          <Diary />
        ) : (
          <div className="Home">
            <FormHome title="Calculate your daily calorie intake right now" />
            {userIsLoggedIn ? null : (
              <Button
                className="calc__btn"
                style={{
                  backgroundColor: "#fc842d",
                  padding: "15px 20px",
                  borderRadius: "20em",
                  position: "absolute",
                  bottom: "0",
                }}
                variant="contained"
                onClick={handleOpenModal}
              >
                Start losing weight
              </Button>
            )}
          </div>
        )}
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}/>
    </>
  );
};

export default Home;

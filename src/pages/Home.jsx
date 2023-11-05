import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../redux/dairy/dairySelector";
// import BackAnimated from "../components/BackAnimated/BackAnimated";
import authSelector from "../redux/auth/selectors";
import "../styles/Home.css";
import Modal from "../components/Modal/Modal"

import Diary from "./DiaryPage";

import FormHome from "../components/Forms/FormHome/FormHome";

const Home = () => {

// // OPNE Y CLOSE 
// const [isModalOpen, setModalOpen] = useState(false); // Estado para controlar la apertura y cierre del modal
// // ...

// const handleOpenModal = () => {
//   console.log("Opening modal");
//   setModalOpen(true);
// };

// const handleCloseModal = () => {
//   console.log("Closing modal");
//   setModalOpen(false);
// };



  const userIsLoggedIn = useSelector(authSelector.getIsLoggedIn);
  // const products = useSelector(getAllProducts);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state)
 
  return (
    <section>
  // onClick={handleOpenModal} // Abre el modal al hacer clic en el botón


          {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
      
          {/* <button onClick={findProducts}>show in console prod</button> */}
          {/* {
            fetchAll.map((e) => (<li key={id}>{e}</li>))
          } */}


      {userIsLoggedIn ? (
        <Diary />
      ) : (
        <div className="Home">
          <FormHome title="Calculate your daily calorie intake right now" />
        </div>
      )}
    </section>
  );
};

export default Home;

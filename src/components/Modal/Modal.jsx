import React, { useEffect } from 'react';
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';
import calcSelectors from "../../redux/calculatorSlice/calculatorSelectors";
import { useDispatch, useSelector } from "react-redux";
import { wipeUser } from "../../redux/calculatorSlice/calcSlice";

import "./modal.css";

const Modal = ({ isOpen, onClose }) => {
  const { dailyRate, notHealthy } = useSelector(calcSelectors.getUserData);
  console.log(dailyRate);
  console.log(notHealthy);

  const dispatch = useDispatch();


  const titleStyles = {
    fontFamily: "Verdana",
    fontSize: "1.5em",
    fontWeight: 700,
    lineHeight: "36px",
    letterSpacing: "0em",
    textAlign: "center",
    marginTop: "50px",

  };

  const close = {
    position: "absolute",
    width:"10px",
    fontSize:"25px",
    top: "1.5rem", // Ajusta la posición vertical
    right: "1rem", // Ajusta la posición horizontal para la esquina derecha
    cursor: "pointer",
    color: "black",

  };

  const valuekcal = {
    fontFamily: "Verdana",
    fontSize: "48px",
    fontWeight: "700",
    lineHeight: "32px",
    letterSpacing: "0.04em",
    textAlign: "center",
    color:"#264061",
    marginTop: "30px"
  };

  const kcla = {
    fontFamily: "Verdana",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "32px",
    letterSpacing: "0.04em",
    textAlign: "center",
    color:"#264061",
    marginTop: "30px"
  };

  const vectorStyles = {
    minWidth: "70px",
    width: "100%",
    maxWidth: "330px",
    height: "1px", // Altura de 1 píxel para que parezca una línea
    border: "1px solid #E0E0E0", // Border de 1 píxel sólido de color negro

  };

  const notfoot = {
    fontFamily: "Verdana", // Fixed the typo in fontFamily
    lineHeight: "36px",
    fontSize:"19px",
    letterSpacing: "0em",
    textAlign: "center",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

 
  const buttonStar = {
    backgroundColor: "#FC842D",
    padding: "15px 20px",
    minWidth: "8rem",
    width: "100%",
    maxWidth: "18rem",
    borderRadius: "20em",
    fontFamily: "Verdana bold",
    textTransform: "none",
    color: "#FFFFFF",
    borderColor: "transparent",
    cursor: "pointer",
    position: "relative",
    
    // bottom:"-8rem"
  };
  const listnotfoot = {
    fontFamily: "Verdana",
    fontFize: "14px",
    fontWeight: "400",
    lineHeight: "17px",
    letterSpacing: "0.04em",

    color: "#9B9FAA",
    marginTop: "10px",
    marginBottom: "10px",
    textAlign: "center",

    gap:"0.5em",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",

  };
  
  useEffect(() => {
    console.log(dailyRate);
    console.log(notHealthy);
  }, [dailyRate, notHealthy]);

  return (
    isOpen && (
      <div className="backdrop">
          <div className="modAl">
            <div className="contModal">
            <Button
              style={close}
              onClick={() => {
                onClose();
                dispatch(wipeUser());
              }}
            >
              X
            </Button>
              <h2 style={titleStyles}>
                Your recommended daily calorie intake is
              </h2>
              <br />
              <p style={valuekcal}>
                {dailyRate}<span style={kcla}>kcal</span>
              </p>
              <p style={vectorStyles}></p>
              <p style={notfoot}>Foods you shouldnt eat</p>
              <ul style={listnotfoot}>
                {notHealthy.map((food, index) => (
                  <li key={index} className='itemModal'> • {food}</li>
                ))}
              </ul>
            <NavLink to="/SlimMom/signup">
              <button style={buttonStar}> Start losing weight</button>
            </NavLink>
            </div>
        </div>
      </div>
    )
  );
};

export default Modal;

import React, { useEffect } from 'react';
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';
import calcSelectors from "../../redux/calculatorSlice/calculatorSelectors";
import { useDispatch, useSelector } from "react-redux";
import { wipeUser } from "../../redux/calculatorSlice/calcSlice";

const Modal = ({ isOpen, onClose }) => {
  const { dailyRate, notHealthy } = useSelector(calcSelectors.getUserData);
  console.log(dailyRate);
  console.log(notHealthy);

  const dispatch = useDispatch();
  const modalStyles = {
    width: '672px',
    height: '542px',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(15%, -44%)',
    border: '1px solid #E0E0E0',
    background: 'white',
    zIndex: 9999,

  };

  const titleStyles = {
    fontFamily: "Verdana",
    fontSize: "26px",
    fontWeight: 700,
    lineHeight: '36px',
    letterSpacing: '0em',
    textAlign: 'center',
    marginTop: "72px"
  };

  const close = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: "black"
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
    width: '330px',
    height: '1px',
    top: "300px",
    left: "184px",
    border: '1px solid #E0E0E0',
    position: 'absolute',
  };

  const notfoot = {
    fontFamily: "Verdana", // Fixed the typo in fontFamily
    lineHeight: "36px",
    letterSpacing: "0em",
    textAlign: "center",
    marginTop: "100px",
  };
  const close = {
    position: "absolute",
    top: "10px", // Ajusta la posición vertical
    right: "10px", // Ajusta la posición horizontal para la esquina derecha
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
    color: "#264061",
    marginTop: "30px",
  };
  const kcla = {
    fontFamily: "Verdana",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "32px",
    letterSpacing: "0.04em",
    textAlign: "center",
    color: "#264061",
    marginTop: "30px",
  };
  const vectorStyles = {
    width: "330px",
    height: "1px", // Altura de 1 píxel para que parezca una línea
    top: "300px",
    left: "184px",
    border: "1px solid #E0E0E0", // Border de 1 píxel sólido de color negro
    position: "absolute",
  };

 
  const buttonStar = {
    backgroundColor: "#FC842D",
    padding: "15px 20px",
    width: "14rem",
    borderRadius: "20em",
    fontFamily: "Verdana bold",
    textTransform: "none",
    position: "relative",
    top: "23px",
    left: "223px",
    color:"#FFFFFF" ,
    borderColor: "transparent",
    cursor: "pointer"
  };
const listnotfoot ={
  fontFamily: "Verdana",
  fontFize: "14px",
  fontWeight: "400",
  lineHeight: "17px",
  letterSpacing: "0.04em",
 
  color: "#9B9FAA",
  marginTop: "50px",
  textAlign: "center",
  


}
  const { dailyRate, notHealthy } = useSelector(calcSelectors.getUserData);
  
  useEffect(() => {
    console.log(dailyRate);
    console.log(notHealthy);
  }, [dailyRate, notHealthy]);

  return (
    isOpen && (
      <div >
        <div style={modalStyles}>
          <Button
            style={close}
            onClick={() => {
              onClose();
              dispatch(wipeUser());
            }}
          >
            X
          </Button>
          <h2 style={titleStyles}>Your recommended daily calorie intake is</h2>
          <br />
          <p style={valuekcal}>{dailyRate} <span style={kcla}>kcal</span></p>

          <p style={vectorStyles}></p>
          <br />
          <p style={notfoot}>Foods you shouldnt eat</p>
          <ul style={listnotfoot}>
            {notHealthy.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>


          <NavLink to="/SlimMom/signup">
            <button style={buttonStar}> Start losing weight</button>
          </NavLink>
        </div>
      </div>
    )
  );
};

export default Modal;

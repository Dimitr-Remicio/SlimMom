import React from 'react';
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';


const Modal = ({ isOpen, onClose }) => {
  const modalStyles = {
    width: '672px',
    height: '574px',
    position: 'fixed',
    top: '50%', // Centra verticalmente
    left: '50%', // Centra horizontalmente
    transform: 'translate(32%, -90%)', // Centra tanto horizontal como verticalmente
    border: '1px solid #E0E0E0',
    background: 'white',
    zIndex: 9999, // Asegura que el modal esté por encima de otros elementos

  };


  const titleStyles = {
    fontFamily: 'Verdana',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: '36px',
    letterSpacing: '0em',
    textAlign: 'center',
    marginTop: "100px"
  };
  const close ={
    position: 'absolute',
    top: '10px', // Ajusta la posición vertical
    right: '10px', // Ajusta la posición horizontal para la esquina derecha
    cursor: 'pointer',
    color: "black"
  }
const valuekcal = {
fontFamily: "Verdana",
fontSize: "48px",
fontWeight: "700",
lineHeight: "32px",
letterSpacing: "0.04em",
textAlign: "center",
color:"#264061",
marginTop: "30px",
}
const kcla= {
fontFamily: "Verdana",
fontSize: "16px",
fontWeight: "700",
lineHeight: "32px",
letterSpacing: "0.04em",
textAlign: "center",
color:"#264061",
marginTop: "30px",
}
const vectorStyles = {
    width: '330px',
    height: '1px', // Altura de 1 píxel para que parezca una línea
    top:"300px",
    left: "184px",
    border: '1px solid #E0E0E0', // Border de 1 píxel sólido de color negro
    position: 'absolute',
    
  };
  
  const notfoot ={
    fontfamily: "Verdana",
  fontSize: "20px",
  fontWeight: "700",
  lineHeight: "17px",
  letterSpacing: "0.04em",
  textAlign: "center",
  marginTop: "100px",
  }
const buttonStar={
    backgroundColor: "#FC842D",
    padding: "15px 20px",
    width: "18rem",
    borderRadius: "20em",
    fontFamily: "Verdana bold",
    textTransform: "none",
   position: "relative",
   top: "146px",
   left: "194px",
   color:"#FFFFFF" ,
   borderColor: "transparent",
   cursor: "pointer",
}



  return (
    isOpen && (
      <div>
        
        <div style={modalStyles}>
          {/* Contenido del modal */}
          <Button style={close} onClick={onClose}>
            X
          </Button>
          <h2 style={titleStyles} >Your recommended daily calorie intake is</h2>
          <br />
          <p style={valuekcal}>2800 <span style={kcla}>kcal</span></p>
          <p style={vectorStyles}></p>
          <br />
          <p style={notfoot}>Foods you shouldnt eat</p>
          <ul>
           
          </ul>

          <NavLink to="/SlimMom/signup">
          <button  style={buttonStar}> Start losing weight</button>
          </NavLink>
      
        </div>
      </div>
    )
  );
};

export default Modal;

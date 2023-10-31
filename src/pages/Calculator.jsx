// import React from "react";
import Container from "../components/Container/Container";
import FormHome from "../components/FormHome/FormHome";
import Button from "@mui/material/Button";
import RightSidebar from "../components/RightSidebar/RightSidebar"

const Calculator = () => {
  return (
    <Container>
       <div className="Home">
        <h1>Calculate your daily calorie intake right now</h1>
        <FormHome />
        <div style={{translate:"-25px"}}>
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
            href="#contained-buttons"
          >
            Start losing weight
          </Button>
        </div>
        <RightSidebar />
      </div>
    </Container>
    
  );
};

export default Calculator;

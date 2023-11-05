// import React from "react";
import Container from "../components/Container/Container";
import FormHome from "../components/Forms/FormHome/FormHome";
import Button from "@mui/material/Button";
import RightSidebar from "../components/RightSidebar/RightSidebar";

const Calculator = () => {
  return (
    <Container>
      <section>
        <div className="Home">
          <FormHome
            title="Calculate your daily calorie intake right now
"
          />
        </div>
        <RightSidebar />
      </section>
    </Container>
  );
};

export default Calculator;

// import React from "react";
import Container from "../components/Container/Container";
import FormHome from "../components/Forms/FormHome/FormHome";
import RightSidebar from "../components/RightSidebar/RightSidebar";


const Calculator = () => {
  

  return (
    <>
      <Container>
        <section>
          <div className="Home calculator">
            <FormHome title="Calculate your daily calorie intake right now" />
            
          </div>
        </section>
      </Container>

      <RightSidebar />
    </>
  );
};

export default Calculator;

import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import BackAnimated from "../BackAnimated/BackAnimated";
import Background from "../../components/Background/Background";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <div
        className="prueba-container"
        style={{
          position: "fixed" /* Usar posición absoluta */,
          top: "11rem",
          right: "8rem",
          zIndex: "2",
        }}
      ></div>

      <div className="Layout">
        <Container>
          <div className="blur"></div>
          {/* <BackAnimated /> */}
          <Background />
          <Routers />
        </Container>
      </div>
    </>
  );
};

export default Layout;

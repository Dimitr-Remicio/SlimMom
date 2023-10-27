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
      <div className="Layout">
        <Container>
          <div className="blur"></div>
          <BackAnimated />
          {/* <Background /> */}
          <Routers />
        </Container>
      </div>
    </>
  );
};

export default Layout;

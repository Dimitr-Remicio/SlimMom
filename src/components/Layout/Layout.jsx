// import React from "react";
import Header from "../Header/Header";
import Routers from "../../routers/Routers";
import BackAnimated from "../BackAnimated/BackAnimated";
// import Background from "../../components/Background/Background";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="Layout">
        <Container>
          <BackAnimated />
          <div
            style={{
              position: "relative",
              zIndex: "10",
              backgroundColor: "#FFFFFF",
              width: "auto",
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 70%)",
            }}
          >
            <Routers />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Layout;

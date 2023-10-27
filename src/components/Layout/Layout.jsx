import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Background from "../Background/Background";
import Prueba from "../Prueba/Prueba";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Background/> */}
      <div className="prueba-container" style={{
        position: "absolute", /* Usar posición absoluta */
        bottom: "5rem",
        right: "0", 
        zIndex: "2", 
      }}>
        <Prueba />
      </div>
      <div>
        <Routers />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
